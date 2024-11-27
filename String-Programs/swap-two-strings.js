
/** WAP to swap two given Strings */

function swapStrings(str1, str2) {
    [str1, str2] = [str2, str1];    

    console.log("str1: ", str1);
    console.log("str2: ", str2);
}

let str1 = "abc";
let str2 = "def";
swapStrings(str1, str2);