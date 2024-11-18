
/** Find the Missing Numbers in a Consecutive Sequence.
 * 
 *  sum1 is the sum of the array
 *  sum2 is the sum of natural numbers from 1 to the length+1 of array.
 *  missing number is the difference of sum1 and sum2.
 */


function missingNum(arr) {

    let sum1 = 0;
    let sum2 = 0;

    for(let num of arr) {
        sum1 += num;
    }

    for(let i=1; i<=arr.length+1; i++) {
        sum2 += i; 
    }

    let missingNum = sum2 - sum1;

    return missingNum;
}


let arry = [1, 2, 3, 4, 5, 7, 8, 9];
const missingNumber = missingNum(arry);
console.log("Missing number is: ", missingNumber);