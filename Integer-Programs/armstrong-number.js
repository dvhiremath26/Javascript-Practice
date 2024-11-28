
/** 
 * Write a Java Program to check if a number is Armstrong number or not.
 * - Solutions: 
 *    Armstrong Number is a number in which the sum of the cubes of each digit is equal to the number itself. 
 *    For ex: 371 = 3*3*3 + 7*7*7 + 1*1*1
 *  */

function armstrongNumber(num) {
    let sum = 0;

    for(let digit of num.toString()) {
        let numDigit = Number(digit);
        sum += Math.pow(numDigit, 3);
        // sum += numDigit * numDigit * numDigit;
    }

    if(num === sum) {
        console.log(`${num} is a Armstrong number`);
    } else {
        console.log(`${num} is not a Armstrong number`);
    }
}

let num = 371;
armstrongNumber(num);
