var word = ['triple', 'double', 'strike', 'ball', 'jersey','catch'];
var i;
var answerOutput = [];
var msg = document.getElementById('state-msg');
var incorrect = 12;
incorrectGuesses = [];

function chooseWord (answer) {
    return answer[Math.floor((Math.random() * answer.length))]
}
function wordLength (wordToMeasure) {
    return wordToMeasure.length;
}
function keyLog(e) {
    var keyPush = String.fromCharCode(e.keyCode);
    console.log(keyPush); // Diagnostic test of keyboard input
    // for (var i = 0; i < wordCharLength; i++) {
    //     if (keyPush === answerWord[i]) {
    //         answerOutput[i] = keyPush;  
    //         console.log(answerOutput);
    //         msg.textContent = answerOutput;

    //     } else {
    //         incorrect++;
    //         console.log('Incorrect Guesses: ' + incorrect);
    //     }
    // }
    if (answerWord.includes(keyPush)) {
        var answerIndex = answerWord.indexOf(keyPush);
        console.log('correct guess');
    } else {
        console.log('incorrect guess');
        if (incorrect !== 0) {
            incorrect--;
            console.log("incorrect guesses left: " + incorrect);
        } else {
            console.log('sorry, you lost');
        }
    }
}
function outputTemplate(length) {
    for (i = 0; i < wordCharLength; i++) {
        answerOutput[i] = '';
        console.log(answerOutput);
    }
}

var answerWord = chooseWord(word);
var wordCharLength = wordLength(answerWord);

// console.log(answerWord);
// console.log(wordLength(answerWord));

console.log("answerWord = " + answerWord + " wordCharLength = " + wordCharLength);
outputTemplate(wordCharLength);


document.body.addEventListener('keypress', keyLog);


