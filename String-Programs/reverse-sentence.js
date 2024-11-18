
/** Reverse the given sentence */

function reverseSentence(sentence) {
    let words = sentence.split(' ');
    let rev = '';

    for(let word of words) {
        rev = word + " " + rev;
    }
    return rev;
}


let sentence = "Playwright Testing Framework";
const revSentence = reverseSentence(sentence);
console.log("Reversed sentence: ", revSentence);