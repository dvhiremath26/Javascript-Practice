

/** Write a program to find prime numbers in between 2 to 100, 
 *  exlude the numbers containing 3 and 7.
 */


function isPrime(num) {
    let count = 0;

    for(let i=1; i<=num; i++) {
        if(num % i === 0) {
            count++;
        }
    }

    if(count === 2) {
        // console.log(`The number ${num} is a Prime number`);
        return true;
    } else {
        // console.log(`The number ${num} is not a Prime number`);
        return false;
    }
}

function digitContains(num, digitNum) {
    let numString = num.toString();
    let digitString = digitNum.toString();

    for(digit of numString) {
        if(digit === digitString) {
            return true;
        } 
    }
    return false;
}


let primeNumExcludes3and7 = [];

for(let i=2; i<=100; i++) {
    const prime = isPrime(i);

    if(prime) {
        const numContains3and7 = digitContains(i, 3) || digitContains(i, 7);
        if(!numContains3and7) {
            primeNumExcludes3and7.push(i);
        }        
    }
}

console.log("Prime numbers excluding 3 and 7", primeNumExcludes3and7);
