
/** Reverse the words in the given sentence. */

function reverseString(str) {
    let rev = "";

    for(let char of str) {
        rev = char + rev;
    }

    return rev;
}


function revWords(sentence) {
    let rev = '';

    let words = sentence.split(' ');

    for(let word of words) {
        rev = rev + " " + reverseString(word);
    }

    return rev;    
}

let sentence = "Playwright Testing Framework";
const rev = revWords(sentence);
console.log("Reversed words: ", rev);