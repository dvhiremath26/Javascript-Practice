
/** Check if two strings are Anagrams */

function strAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return `The given strings "${str1}" and "${str2}" are not Anagrams.`;
    }

    let sortStr1 = str1.split('').sort().join('');
    let sortStr2 = str2.split('').sort().join('');

    if (sortStr1 === sortStr2) {
        return `The given strings "${str1}" and "${str2}" are Anagrams.`;
    } else {
        return `The given strings "${str1}" and "${str2}" are not Anagrams.`;
    }
}

let str1 = "gum";
let str2 = "mug";

console.log(strAnagram(str1, str2)); 
