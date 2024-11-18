
/** Remove duplicate chacters in a given string */

function removeDuplicates(str) {
    let output = '';

    for(let char of str) {
        if(!output.includes(char)) {
            output += char; 
        }
    }

    return output;
}


let str = "deepak";
const output = removeDuplicates(str);
console.log("After removing duplicates: ", output);