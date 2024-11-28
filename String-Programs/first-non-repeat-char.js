
/** 
 * WAP to print the maximum consecutive ones in a given array. 
 * */

function nonRepeatingChar(str) {
    let charCount = {};

    for(let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of str) {
        if(charCount[char] === 1){
            return char;
        }
    }
    return "There is no non-repeating character in the given string!";   
}

let str = "aabbccc";
let char = nonRepeatingChar(str);
console.log("First non repeating char: ", char);