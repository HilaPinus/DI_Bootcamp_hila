//Create a function that: takes in two strings as two parameters
//and returns a boolean that indicates whether or not the first string is an anagram of the second string.


function isAnagram (sentence1, sentence2) {
const str1= sentence1.toLowerCase().split(" ").join("");
const str2= sentence2.toLowerCase().split(" ").join("");
    if (str1.length != str2.length) return false;
    const total = {};
        for (const letter of str1) {
        total[letter] = total[letter] + 1 || 1;
    }
    for (const letter of str2) {
    total[letter] = total[letter] ? total[letter]-1 : -1 ;
    }

    const differences = Object.values(total);
    return !differences.some((num) => num != 0);
}

const result1 = isAnagram("Astronomer", "Moon starer"); //true
console.log("result1:", result1);


//Example of anagrams

//"Astronomer" is an anagram of "Moon starer"
//"School master" is an anagram of "The classroom"
//"The Morse Code" is an anagram of "Here come dots"


//Do we need to consider whitespace?
//Trim whitespace prior to comparison.


//

function isAna(str1, str2) {
    return (
        str1.toLowerCase().replace(/ /g, "").split("").sort().toString() ===
        str2.toLowerCase().replace(/ /g, "").split("").sort().toString()
    );
}

console.log(isAna("Astronomer", "Moon Starer"));








