var words = ['gone with the wind'];
var word;
var usedWords = []

guesses = 13;
incorrect_guesses = [];
answer = [];
wins = 0;

// Create spans for answer to rest in -- each letter gets a span

function createAnswer () {
    if (typeof words !== 'undefined' && words.length > 0) {
        word = words[Math.floor(Math.random() * words.length)];

        words = words.filter(function(a) {return a !== word});
        for(var i = 0; i < word.length; i++) {
            var node = document.createElement("span");                 // Create a <span> node
            node.className = 'letter';
            node.id = 'letter_' + i;
            var textnode = document.createTextNode("-");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <span>
            document.getElementById("answer").appendChild(node);     // Append <span> to <div> 
        }
    } else {
        document.getElementById("game_status").textContent += " We ran out words :(";
    } 
}
function restartUI () {
    incorrect_guesses = [];
    answer = [];
    guesses = 13;
    document.getElementById("remaining_guesses").textContent = guesses;
    document.getElementById('answer').innerHTML = "";
    document.getElementById("incorrect").textContent = incorrect_guesses;
    createAnswer()
}
function winner () {
    document.getElementById("game_status").textContent = "You Won!";
}
function invalidWords(lastWord) {
    return usedWords.push(lastWord);
}

createAnswer();

document.onkeyup = function(event) {
    keyPress = event.key;
    keyPress = keyPress.toLowerCase();
  console.log("You pressed: " + keyPress);
    if (word.indexOf(keyPress) > -1) {             // correct guess
        // console.log("you matched on a letter");
        var indices = [];
        for (var i = 0; i < word.length; i++) {
            if (word[i] === keyPress) indices.push(i);
            // answer[indices[i]] = keyPress;
            // console.log("Answer = " + answer);
        }
        // console.log("Indices match = " + indices);
        for (var j = 0; j < indices.length; j++) {
            document.getElementById("letter_" + indices[j]).textContent = keyPress;
            answer[indices[j]] = keyPress;
            // console.log("Answer = " + answer);
            // console.log(answer.join(""));
            if (answer.join("") === word) {
                document.getElementById("game_status").textContent = "You Won!";
                wins++;
                document.getElementById('wins').textContent = wins;
                restartUI();   // Restart the app   
            }
        }
    }
    else {  // incorrect guess
        if (incorrect_guesses.indexOf(keyPress) === -1) {
            guesses--;
            incorrect_guesses.push(keyPress);
            document.getElementById("remaining_guesses").textContent = guesses;

            for (var k = 0; k < incorrect_guesses.length; k++) {
                // console.log("Incorrect Guesses: " + incorrect_guesses[k]);
                document.getElementById("incorrect").textContent = incorrect_guesses;
            }

        }      
        if (guesses === 0 || keyPress === '`') {  // pressing '`' key will auto generate loss (Diag only)
            document.getElementById("game_status").textContent = "You lost :(";
            restartUI();   // Restart the app
        }
    }
};