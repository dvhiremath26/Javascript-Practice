/** Factorial of a number */

function factorial(num) {
    let result = num;
    for(let i=1; i<num; i++) {
        result = i * result;
    }
    return result;
}

let num = 5;
const factNum = factorial(num);
console.log(`Factorial of a number ${num} is: `, factNum);