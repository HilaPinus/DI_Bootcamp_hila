/*Instructions
Prompt the user for several words (separated by commas).
*/
//Put the words into an array.
//Console.log the words one per line, in a rectangular frame as seen below.

const answer = prompt("words");
const words = answer.split(",");
let longWord = 0;
for (const word of words) {
    console.log(word);
    let wordLength = word.length;
if (wordLength > longWord) {
    longWord = wordLength;
    console.log("longWord:", longWord);
}
}
const starFirst = longWord +2;

Hint
The number of stars that wraps the sentence, must depend on the length of the longest word.

["Hello", "World", "in", "a", "frame"]