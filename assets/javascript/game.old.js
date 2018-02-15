var words = ['gone with the wind', 'casa blanca'];
var gifs = ['https://thumbs.gfycat.com/HotScalyAztecant-size_restricted.gif','https://thumbs.gfycat.com/ExaltedMeaslyCaiman-size_restricted.gif']
var songList = ['assets/sounds/gone_with_the_wind.mp3', 'https://ia800305.us.archive.org/21/items/AsTimeGoesBy_591/04Track4.ogg']
var word;
var usedWords = []
var win_gif;
var guesses = 13;
var incorrect_guesses = [];
var answer = [];
var wins = 0;

var img = document.createElement("img");
var src = document.getElementById("modal_body");
var item = document.getElementById("modal_body").childNodes[0];
var songSource;
var songs = document.createElement('audio')
songs.id = 'audio';

/* Bugs
    --------------------------------
    [*]audio only plays the file for the first word selected
    [ ] content of the document moves when modal pops up
    [ ] does not provide error messages
    --------------------------------
*/
/* Feature Upgrades
    --------------------------------
    * have spaces automatically shown in the UI if they exist
    * disallow non-relevant keys
    * press space bar to begin
    * Use movie tickets? to represent each incorrect guess
    * Make the background look better
    * Have the videos play in the cinema area
    --------------------------------
*/


// Create spans for answer to rest in -- each letter gets a span

function createAnswer () {
    if (typeof words !== 'undefined' && words.length > 0) {             // Verify words has data in it
        var arrayPosition = Math.floor(Math.random() * words.length);   // Generate a random number that is less than the array length

        word = words[arrayPosition];                                    // Define the answer word    
        win_gif = gifs[arrayPosition];                                  // Define the correct gif    
        songSource = songList[arrayPosition];   
        
        console.log('songSource = ' + songSource);

        console.log('word = ' + word + ' wind_gif = ' + win_gif);
        console.log('-------------------------') 

        img.src = win_gif;                                              // Set gif equal to the <img src=> 
        console.log('img.src = ' + img.src );    
        console.log('-------------------------')           
        img.setAttribute("width", "100%")                               // Set image attribute to 100% of container width        
        src.replaceChild(img, src.childNodes[0]); 


        words = words.filter(function(a) {return a !== word});          // Remove chosen word from original words array to ensure no repeated words   
        gifs = gifs.filter(function(a) { return a !== win_gif});
        songList = songList.filter(function (a) { return a !== songSource})
        console.log('after filter functions, songList is now: ' + songList)
        
        for(var i = 0; i < word.length; i++) {                          // Create a span element for each letter in word                                  
            var node = document.createElement("span");                  
            node.className = 'letter';
            node.id = 'letter_' + i;
            var textnode = document.createTextNode("-");                // Add hyphen for visual place holder
            node.appendChild(textnode);                                 
            document.getElementById("answer").appendChild(node);       
        }
    } else {                                                            // Generate error message(s)     
        // document.getElementById("game_status").textContent += " We ran out words :(";  
    } 
}
function startApp () {         
    // Reset necessary variables and update html with new values

    document.getElementById("remaining_guesses").textContent = guesses;
    document.getElementById('answer').innerHTML = "";
    document.getElementById("incorrect").textContent = incorrect_guesses;
    document.getElementById('wins').textContent = wins;
    createAnswer()                                                      // Generate new answer      
}
function winner () {                                                    // Overlay Modal and pass in appropriate gif 
    $('#exampleModal').modal();                         // display winning gif
    console.log('songSource in winner is now equal to: ' + songSource);
    /* figure out why the audio only works on the first load and not subsequent loads */

    src.appendChild(songs);
    songs.src = songSource;

    songs.autoplay = false;
    play();
    setCurTime();
    wins++;

    incorrect_guesses = [];                                                 
    answer = [];
    guesses = 13;


    // startApp();   // Restart the app   
    $("#exampleModal").on("hidden.bs.modal", function () {
        pause();
        startApp();
    });
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
function pause(){
    var audio = document.getElementById("audio");
    audio.pause();
}
function setCurTime() { 
    var audio = document.getElementById("audio");
    audio.currentTime=5;
} 

/* Run create answer function to generate new answer */
startApp();

/* Wait for key stroke and pass through conditionals */
document.onkeyup = function(event) {
    keyPress = event.key;
    keyPress = keyPress.toLowerCase();
    // console.log("You pressed: " + keyPress);

    if (keyPress === '0') { // override for auto victory!
        winner();
    }
    if (word.indexOf(keyPress) > -1) {                                  // correct guess
        var indices = [];                                               // create a variable to store all correct guesses
        for (var i = 0; i < word.length; i++) {                         
            if (word[i] === keyPress) indices.push(i);                  // Add the position within the word array to indices for all correct guesses
        }
        for (var j = 0; j < indices.length; j++) {
            document.getElementById("letter_" + indices[j]).textContent = keyPress;  // Add correct guesses to the appropriate span
            answer[indices[j]] = keyPress;                              // Update answer[] with appropriate letter in appropriate space
            if (answer.join("") === word) {                             // If answer array has all letter in word in correct order, generate win conditions
                winner();

            }
        }
    }
    else {  // incorrect guess
        if (incorrect_guesses.indexOf(keyPress) === -1) {
            guesses--;
            incorrect_guesses.push(keyPress);
            document.getElementById("remaining_guesses").textContent = guesses;

            for (var k = 0; k < incorrect_guesses.length; k++) {
                document.getElementById("incorrect").textContent = incorrect_guesses;
            }
        }
        // DIAG ->  '`' keypress will auto generate loss (Diag only)
        if (guesses === 0 || keyPress === '1') {  
            document.getElementById("game_status").textContent = "You lost :(";

            startApp();   // Restart the app
        }
    }
};
