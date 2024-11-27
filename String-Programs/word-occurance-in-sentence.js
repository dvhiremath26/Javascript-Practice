
/** WAP to print the occurance of the words in the given sentence */

function wordOcuurance(str) {
    let words = str.split(' ');
    let occurance = {};

    for(let word of words) {
        if(occurance[word]) {
            occurance[word]++;
        } else {
            occurance[word] = 1;
        }
    }

    console.log("Occurance of words in the givem sentence: \n", occurance);
}

let str = "one two three two three three";
wordOcuurance(str);