
/** Find the given string is a Palindrome.. */


function isPalindromer(str) {
    let rev = "";

    for(let char of str) {
        rev = char + rev;
    }

    if(str === rev) {
        return true;
    } else {
        return false;
    }
}

let str = "levael";
const palindrome = isPalindromer(str);

if(palindrome) {
    console.log("Then given numbe is a palindrome!");
} else {
    console.log("Then given numbe is not a palindrome....");

}

