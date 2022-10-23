/*Instructions
Prompt the user for several words (separated by commas).
*/
//Put the words into an array.
//Console.log the words one per line, in a rectangular frame as seen below.

const promptInput = prompt("Enter comma separated words");
const words = promptInput.split(",");
function findLongestWord() {
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > max) {
            max = words[i].length;
        }
    }
    return max;
}
function printWords(words,max) {
    firstAndLast(max);
    for (let word of words) {
        console.log(`* ${word + ' '.repeat(max - word.length)} *`);
    }
    firstAndLast(max);

}
function firstAndLast(max) {
    console.log('*'.repeat(max + 4));
}
printWords(words,findLongestWord());

