
/** GCD of two number and three numbers */

function gcd2num(num1, num2) {
    while(num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

let num1 = 12;
let num2 = 18;
const gcd = gcd2num(num1, num2);
console.log("GCD of two numbers: ", gcd);

let num3 = 8;

// GCD of three numbers 12, 18, 8
const gcd3num = gcd2num(gcd, num3);
console.log("GCD of three numbers: ", gcd3num);
