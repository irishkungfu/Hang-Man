var words = ['test', 'triple', 'illusion'];
var word;

guesses = 13;
incorrect_guesses = [];
answer = [];
wins = 0;

// Create spans for answer to rest in -- each letter gets a span

function createAnswer () {
    word = words[Math.floor(Math.random() * words.length)];
    console.log("Selected word is: " +  word); // diag
    for(var i = 0; i < word.length; i++) {
        var node = document.createElement("span");                 // Create a <div> node
        node.className = 'letter';
        node.id = 'letter_' + i;
        var textnode = document.createTextNode(" ");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("answer").appendChild(node);     // Append <li> to <ul> with id="myList"
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

createAnswer();

document.onkeyup = function(event) {
  console.log("You pressed: " + event.key);
    if (word.indexOf(event.key) > -1) {             // correct guess
        console.log("you matched on a letter");
        var indices = [];
        for (var i = 0; i < word.length; i++) {
            if (word[i] === event.key) indices.push(i);
            // answer[indices[i]] = event.key;
            // console.log("Answer = " + answer);
        }
        console.log("Indices match = " + indices);
        for (var j = 0; j < indices.length; j++) {
            document.getElementById("letter_" + indices[j]).textContent = event.key;
            answer[indices[j]] = event.key;
            console.log("Answer = " + answer);
            console.log(answer.join(""));
            if (answer.join("") === word) {
                alert('You Win!');
                wins++;
                document.getElementById('wins').textContent = wins;
                restartUI();   // Restart the app   
            }
        }
    }
    else {  // incorrect guess
        if (incorrect_guesses.indexOf(event.key) === -1) {
            guesses--;
            incorrect_guesses.push(event.key);
            document.getElementById("remaining_guesses").textContent = guesses;

            for (var k = 0; k < incorrect_guesses.length; k++) {
                console.log("Incorrect Guesses: " + incorrect_guesses[k]);
                document.getElementById("incorrect").textContent = incorrect_guesses;
            }

        }      
        if (guesses === 0) {
            alert ('you lose');
            restartUI();   // Restart the app
             
        }
    }
};