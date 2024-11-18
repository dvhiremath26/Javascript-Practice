
/** Reverse the given string. */


function reverseString(str) {
    let rev = "";

    for(let char of str) {
        rev = char + rev;
    }

    return rev;
}

let str = "Playwright Testing Framework";
const revString = reverseString(str)
console.log("Reverse string is: ", revString);

