var words = ['gone with the wind', 'casa blanca'];
var gifs = ['https://thumbs.gfycat.com/HotScalyAztecant-size_restricted.gif','https://thumbs.gfycat.com/ExaltedMeaslyCaiman-size_restricted.gif']
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




// Create spans for answer to rest in -- each letter gets a span

function createAnswer () {
    if (typeof words !== 'undefined' && words.length > 0) {             // Verify words has data in it
        var arrayPosition = Math.floor(Math.random() * words.length);   // Generate a random number that is less than the array length
        /* i am currently removing one of the words array elements each run through, but not a corresponding
        gifs array element.  I need to use a different mechanism */
        word = words[arrayPosition];                                    // Define the answer word    
        win_gif = gifs[arrayPosition];                                  // Define the correct gif    

        console.log('word = ' + word + ' wind_gif = ' + win_gif);
        console.log('-------------------------') 

        img.src = win_gif;                                              // Set gif equal to the <img src=> 
        console.log('img.src = ' + img.src );    
        console.log('-------------------------')           
        img.setAttribute("width", "100%")                               // Set image attribute to 100% of container width        
        src.replaceChild(img, src.childNodes[0]);  

        words = words.filter(function(a) {return a !== word});          // Remove chosen word from original words array to ensure no repeated words   
        gifs = gifs.filter(function(a) { return a !== win_gif});
        
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
    play();
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
