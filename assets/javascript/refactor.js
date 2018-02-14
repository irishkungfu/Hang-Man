var wins = 0;
var state;

// Define Movies - (title, stub, video)
var gone_with_the_wind = new Movie('Gone With the Wind', '<p>Gone with the Wind is a 1939 American epic historical romance film, adapted from Margaret Mitchell\'s 1936 novel of the same name. The film was produced by David O. Selznick of Selznick International Pictures and directed by Victor Fleming. Set in the American South against the backdrop of the American Civil War and the Reconstruction era, the film tells the story of Scarlett O\'Hara, the strong-willed daughter of a Georgia plantation owner, from her romantic pursuit of Ashley Wilkes, who is married to his cousin, Melanie Hamilton, to her marriage to Rhett Butler. The leading roles are played by Vivien Leigh (Scarlett), Clark Gable (Rhett), Leslie Howard (Ashley), and Olivia de Havilland (Melanie).</p><p>Production was difficult from the start. Filming was delayed for two years because of Selznick\'s determination to secure Gable for the role of Rhett Butler, and the "search for Scarlett" led to 1,400 women being interviewed for the part. The original screenplay was written by Sidney Howard and underwent many revisions by several writers in an attempt to get it down to a suitable length. The original director, George Cukor, was fired shortly after filming began and was replaced by Fleming, who in turn was briefly replaced by Sam Wood while Fleming took some time off because he was exhausted.</p><p>The film received positive reviews upon its release, in December 1939, although some reviewers found it overlong. The casting was widely praised, and many reviewers found Leigh especially suited to her role as Scarlett. At the 12th Academy Awards, it received ten Academy Awards (eight competitive, two honorary) from thirteen nominations, including wins for Best Picture, Best Director (Fleming), Best Adapted Screenplay (posthumously awarded to Sidney Howard), Best Actress (Leigh), and Best Supporting Actress (Hattie McDaniel, becoming the first African American to win an Academy Award). It set records for the total number of wins and nominations at the time. The film was immensely popular, becoming the highest-earning film made up to that point, and held the record for over a quarter of a century. When adjusted for monetary inflation, it is still the most successful film in box-office history.</p><p>Gone with the Wind has been criticized as historical revisionism glorifying slavery, and it has been credited with triggering changes in the way in which African Americans are depicted cinematically. It was re-released periodically throughout the 20th century and became ingrained in popular culture. The film is regarded as one of the greatest films of all time; it has placed in the top ten of the American Film Institute\'s list of the top 100 American films since the list\'s inception, in 1998; and, in 1989, the United States Library of Congress selected it for preservation in the National Film Registry.</p>', 'assets/videos/gone_with_the_wind.mp4');
var casablanca = new Movie('Casablanca', '<p>Casablanca is a 1942 American romantic drama film directed by Michael Curtiz based on Murray Burnett and Joan Alison\'s unproduced stage play Everybody Comes to Rick\'s. The film stars Humphrey Bogart, Ingrid Bergman, and Paul Henreid; it also features Claude Rains, Conrad Veidt, Sydney Greenstreet, Peter Lorre, and Dooley Wilson. Set during contemporary World War II, it focuses on an American expatriate who must choose between his love for a woman and helping her and her husband, a Czech Resistance leader, escape from the Vichy-controlled city of Casablanca to continue his fight against the Nazis.</p><p>Story editor Irene Diamond convinced producer Hal B. Wallis to purchase the film rights to the play in January 1942. Brothers Julius and Philip G. Epstein were initially assigned to write the script. However, despite studio resistance, they left to work on Frank Capra\'s Why We Fight series early in 1942. Howard E. Koch was assigned to the screenplay until the Epsteins returned a month later. Principal photography began on May 25, 1942, ending on August 3; the film was shot entirely at Warner Bros. Studios in Burbank, California with the exception of one sequence at Van Nuys Airport in Van Nuys, Los Angeles.</p><p>Although Casablanca was an A-list film with established stars and first-rate writers, no one involved with its production expected it to be anything out of the ordinary, just one of the hundreds of pictures produced by Hollywood every year. Casablanca was rushed into release to take advantage of the publicity from the Allied invasion of North Africa a few weeks earlier. It had its world premiere on November 26, 1942, in New York City and was released nationally in the United States on January 23, 1943. The film was a solid if unspectacular success in its initial run.</p><p>Exceeding expectations, Casablanca went on to win the Academy Award for Best Picture, while Curtiz was selected as Best Director and the Epsteins and Koch were honored for writing the Best Adapted Screenplay - and gradually its reputation grew. Its lead characters, memorable lines, and pervasive theme song have all become iconic and the film consistently ranks near the top of lists of the greatest films in history.</p>', 'assets/videos/casablanca.ogv');
var sunrise = new Movie('Sunrise', '<p>Sunrise: A Song of Two Humans (also known as Sunrise) is a 1927 American silent romantic drama film directed by German director F. W. Murnau and starring George O\'Brien, Janet Gaynor, and Margaret Livingston. The story was adapted by Carl Mayer from the short story "The Excursion to Tilsit", from the collection with the same title by Hermann Sudermann.</p><p>Murnau chose to use the then new Fox Movietone sound-on-film system, making Sunrise one of the first feature films with a synchronized musical score and sound effects soundtrack. The film incorporated Charles Gounod\'s 1872 composition Funeral March of a Marionette, which was later used as the theme for the television series Alfred Hitchcock Presents (1955-65). Frederic Chopin\'s A minor prelude also features prominently in orchestral arrangement.</p>','assets/videos/sunrise.mp4');
var psycho = new Movie('Psycho','','');
var pulp_fiction = new Movie('Pulp Fiction','','');
var herbie_the_love_bug = new Movie('Herbie the Love Bug','','');
var forest_gump = new Movie('Forest Gump','','');
var star_wars = new Movie('Star Wars','','');
var citizen_kane = new Movie('Citizen Kane','','');
var the_godfather = new Movie('The Godfather','','');
var the_wizard_of_oz = new Movie('The Wizard of Oz','','');

// State constructor
function GameState(selectedMovie) {
    this.guessesLeft = 10;
    this.selectedMovie = selectedMovie;
    this.wrongLetters = [];
    this.correctLetters = [];
    letterCount: function countLetters () {
        // count the letters in selected title
    };
};

// Movie constructor
function Movie(title, stub, video) {
    this.title = title;
    this.stub = stub;
    this.video = video;
};

// Populate a new state
function setState () {
    var currentState = new GameState(chooseTitle());
    return(currentState);
};

// Choose a movie and remove it as an option for the next go round
function chooseTitle () {
    if (typeof movieTitles !== 'undefined' && movieTitles.length > 0) {             // Verify movieTitles has data in it
        var arraySelection = Math.floor(Math.random() * movieTitles.length);   // Generate a random number that is less than the array length
        selectedMovieObject = movieTitles[arraySelection];                                    // Define the answer selectedMovieObject    
        movieTitles = movieTitles.filter(function(a) {return a !== selectedMovieObject});
        return selectedMovieObject;

    } else {                                                            // Generate error message(s)     
        document.getElementById("game_status").innerHTML = "<br>We ran out of movies.  Refresh to start over. :( </br>";  
    }; 
};

// Generate spans with dashes to represent the answer's characters
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

// Initiates the app functions and resets the app
function startApp () {
    state = setState();
    console.log('The answer is: ' + state.selectedMovie.title)
    loadSpaces();   
    document.getElementById("remaining_guesses").textContent = state.guessesLeft;
    document.getElementById('answer').innerHTML = "";
    document.getElementById("incorrect").textContent = state.wrongLetters;
    createLetterPlaceholders(state.selectedMovie.title);
};

// Displays modal overlay, updates win counter, handles media playback
function winner () {
    var target = document.getElementById("modal_body");

    var video = document.createElement('video');
    video.src = state.selectedMovie.video;
    video.id = 'video';
    video.type = "video/mp4";  
    video.autoplay = true;
    video.controls = true;
    video.setAttribute('width', '100%');

    var stub = document.createElement('div');
    stub.innerHTML = state.selectedMovie.stub;
    stub.id = 'stub';
    
    wins++;
    document.getElementById('wins').textContent = wins;

    $('#exampleModal').modal();
    target.appendChild(video);
    target.appendChild(stub);

    $("#exampleModal").on("hidden.bs.modal", function () {
        target.innerHTML = "";
        if (typeof movieTitles === 'undefined' || movieTitles.length === 0) {
            document.getElementById("game_status").innerHTML = "We ran out of movies.  Refresh to start over. :(";  
            return;
        } else {
            startApp();
        }
    });
};

// Autopopulates spaces, so only letters are required to win
function loadSpaces () {
    var indices = [];
    for (var i = 0; i < state.selectedMovie.title.length; i++) {
        if (state.selectedMovie.title[i] === " ") indices.push(i); 
    };
    for (var j = 0; j < indices.length; j++) {
        state.correctLetters[indices[j]] = " "; 
    };
};

var movieTitles = [gone_with_the_wind, casablanca, sunrise, psycho, pulp_fiction, herbie_the_love_bug, forest_gump, star_wars, citizen_kane, the_godfather, the_wizard_of_oz];  // Not sure why, but chooseTitle() doesn't work if this is placed at the begining.

startApp();

// Listens for key press and populates letter spans based on user input.  Updates the game's state based on key presses
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