
/**
 * Write a Javascript Program to print the -
 * - first and last position of a number in a given array.
 * 
 * Solution:
 * we need to find the first and last position of -
 * - the target number in the array .
 */

function position(arr, targetNum) {
    let firstPosition = -1;
    let lastPosition = -1;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === targetNum) {
            if(firstPosition === -1) {
                firstPosition = i;
            }
            lastPosition = i;
        }
    }
    return [firstPosition, lastPosition];
}


let arr = [1, 2, 3, 2, 4, 2, 5, 6, 2];
let num = 2;
const [First_Position, Last_Position] = position(arr, num);

if(First_Position !== -1) {
    console.log(`First postion of ${num} is: ${First_Position}`);
    console.log(`Last postion of ${num} is: ${Last_Position}`);
} else {
    console.log(`The target num ${num} is not found!`);
}