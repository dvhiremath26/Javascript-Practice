/** 
 * WAP to generate Output "aabbbcccc" with the input "a2b3c4"
 */

function charCount(str) {
    let obj = {};
    let output = '';

    for(let char of str) {
        if(obj[char]) {
            obj[char]++;
        } else{
            obj[char] = 1;
        }
    }

    for(let key in obj) {
        output += key + obj[key];
    }

    console.log(output);
}

let str = "aabbbcccdddd";
charCount(str);