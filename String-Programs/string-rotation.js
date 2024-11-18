
/** Check if the Two Strings are Rotations of each other */

function strRotation(str1, str2) {
    if(str1.length !== str2.length) {
        return `The given strings "${str1}" and "${str2}" are not a rotation of each other.`;
    }
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    let str3 = lowerStr1 + lowerStr1;

    if(str3.includes(lowerStr2)) {
        return `The given strings "${str1}" and "${str2}" are rotation of each other.`;
    } else {
        return `The given strings "${str1}" and "${str2}" are not a rotation of each other.`;
    }
}


let str1 = "abcd";
let str2 = "cdab";
console.log(strRotation(str1, str2));