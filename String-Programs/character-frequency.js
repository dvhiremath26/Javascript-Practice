
/** Find the character frequency/occurance in a given string */


function charFreq(str) {
    let charFreq = {};

    for(let char of str) {
        charFreq[char] = (charFreq[char] || 0) + 1;

        /** 
        OR
        charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1;

        OR
        if(char in charFreq) {
            charFreq[char] = charFreq[char] + 1;
        } else {
            charFreq[char] = 1;
        } 
        */
    }

    return charFreq;

    // OR

    
    // let myMap = new Map();

    // for(let char of str) {
    //     if(myMap.has(char)) {
    //         myMap.set(char, myMap.get(char) + 1);
    //     } else {
    //         myMap.set(char, 1);
    //     }
    // }

    // return myMap;
}


let str = "abbcccdddd";
const freq = charFreq(str);
console.log("Charcter occurance: ", freq);