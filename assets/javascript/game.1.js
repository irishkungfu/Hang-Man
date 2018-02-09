// var word = ['triple', 'double', 'strike', 'ball', 'jersey','catch'];
// var system = {
//     words: ['triple', 'double', 'strike', 'ball', 'jersey','catch'],
//     guesses: 13,
//     wins: 0,
//     get: word() {
//         return "hello";
//     },
//     set: word (random_value) {
//         random_value = 2;
//     }
// }

// console.log(system);

// system.word = 'jack';

var game = {
    words: ['triple', 'double', 'strike', 'ball', 'jersey','catch'],
    word: function () {
        var test = Math.floor(Math.random() * this.words.length);
        return this.words[Math.floor(Math.random() * this.wordsLength())];
    },  
    wordsLength: function () {
        return this.words.length;
    },
}


console.log(game.word());
console.log(game.wordsLength());
