var wins = 0;
var state;

// Define Movies - (title, image, audio)
var gone_with_the_wind = new Movie('Gone With the Wind', 'https://thumbs.gfycat.com/HotScalyAztecant-size_restricted.gif', 'assets/sounds/gone_with_the_wind.mp3');
var casa_blanca = new Movie('Casa Blanca', 'https://thumbs.gfycat.com/ExaltedMeaslyCaiman-size_restricted.gif', 'https://ia800305.us.archive.org/21/items/AsTimeGoesBy_591/04Track4.ogg');
var sunrise = new Movie('Sunrise', 'https://media.giphy.com/media/12HnDftOjRIGbu/giphy.gif','assets/videos/sunrise.mp4');
console.log(sunrise);
// State constructor
function GameState(selectedMovie) {
    this.guessesLeft = 5;
    this.selectedMovie = selectedMovie;
    this.wrongLetters = [];
    this.correctLetters = [];
    letterCount: function countLetters () {
        // count the letters in selected title
    };
};

// Movie constructor
function Movie(title, image, audio) {
    this.title = title;
    this.image = image;
    this.audio = audio;
};

// Populate a new state
function setState () {
    var currentState = new GameState(chooseTitle());
    return(currentState);
};

function chooseTitle () {
    if (typeof movieTitles !== 'undefined' && movieTitles.length > 0) {             // Verify movieTitles has data in it
        var arraySelection = Math.floor(Math.random() * movieTitles.length);   // Generate a random number that is less than the array length
        selectedMovieObject = movieTitles[arraySelection];                                    // Define the answer selectedMovieObject    
        movieTitles = movieTitles.filter(function(a) {return a !== selectedMovieObject});
        console.log(selectedMovieObject);
        return selectedMovieObject;

    } else {                                                            // Generate error message(s)     
        document.getElementById("game_status").innerHTML = "<br>We ran out of movies.  Refresh to start over. :( </br>";  
    }; 
};

function createLetterPlaceholders (word) {
    for(var i = 0; i < word.length; i++) {                          // Create a span element for each letter in word                                  
        var node = document.createElement("span");                  
        node.className = 'letter';
        node.id = 'letter_' + i;
        if (word[i] === " ") {
            var textnode = document.createTextNode(" ");  
        } else {
        var textnode = document.createTextNode("-");                // Add hyphen for visual place holder
        }
        node.appendChild(textnode);                                 
        document.getElementById("answer").appendChild(node);       
    };
};

function startApp () {
    state = setState();
    loadSpaces();   
    document.getElementById("remaining_guesses").textContent = state.guessesLeft;
    document.getElementById('answer').innerHTML = "";
    document.getElementById("incorrect").textContent = state.wrongLetters;
    createLetterPlaceholders(state.selectedMovie.title);
};

function winner () {
    var target = document.getElementById("modal_body");


    var img = document.createElement('img');                                                    // Overlay Modal and pass in appropriate gif 
    img.src = state.selectedMovie.image;
    img.setAttribute('width', '100%');

    var sound = document.createElement('audio');
    sound.src = state.selectedMovie.audio;
    sound.id = 'audio';
    sound.type = "audio/mpeg";  
    sound.autoplay = true;
    
    wins++;
    document.getElementById('wins').textContent = wins;

    $('#exampleModal').modal();
    target.appendChild(sound);

    target.appendChild(img);

    $("#exampleModal").on("hidden.bs.modal", function () {
        // audio.pause(); 
        target.innerHTML = "";
        console.log(movieTitles);
        if (typeof movieTitles === 'undefined' || movieTitles.length === 0) {
            document.getElementById("game_status").innerHTML = "We ran out of movies.  Refresh to start over. :(";  
            return;
        } else {
            startApp();
        }
    });
};

function loadSpaces () {
    var indices = [];
    for (var i = 0; i < state.selectedMovie.title.length; i++) {
        if (state.selectedMovie.title[i] === " ") indices.push(i); 
    };
    for (var j = 0; j < indices.length; j++) {
        state.correctLetters[indices[j]] = " "; 
    };
};

var movieTitles = [gone_with_the_wind, casa_blanca, sunrise];  // Not sure why, but chooseTitle() doesn't work if this is placed at the begining.

function setCurTime() { 
    var audio = document.getElementById("audio");
    audio.currentTime=5;
};

startApp();

document.onkeyup = function(event) {
    keyPress = event.key;
    keyPress = keyPress.toLowerCase();
    state.selectedMovie.title = state.selectedMovie.title.toLowerCase();

    var letters = "abcdefghijklmnopqrstuvwxyz";
    if (letters.indexOf(keyPress) > -1 && state.correctLetters.join("") !== state.selectedMovie.title) {
        if (state.selectedMovie.title.indexOf(keyPress) > -1) {                                  // correct guess
            var indices = [];                                               // create a variable to store all correct guesses
            for (var i = 0; i < state.selectedMovie.title.length; i++) {                      
                if (state.selectedMovie.title[i] === keyPress) indices.push(i);                  // Add the position within the word array to indices for all correct guesses
            }
            for (var j = 0; j < indices.length; j++) {
                document.getElementById("letter_" + indices[j]).textContent = keyPress;  // Add correct guesses to the appropriate span
                state.correctLetters[indices[j]] = keyPress;                              // Update answer[] with appropriate letter in appropriate space
                if (state.correctLetters.join("") === state.selectedMovie.title) {                             // If answer array has all letter in word in correct order, generate win conditions
                    winner();
                };
            };
        } else {  // incorrect guess
            if (state.wrongLetters.indexOf(keyPress) === -1) {
                state.guessesLeft--;
                state.wrongLetters.push(keyPress);
                document.getElementById("remaining_guesses").textContent = state.guessesLeft;

                for (var k = 0; k < state.wrongLetters.length; k++) {
                    document.getElementById("incorrect").textContent = state.wrongLetters;
                };
            };
        };
    } else {
        console.log('invalid keypress');
    };
};