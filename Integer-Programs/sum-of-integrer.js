
/** WAP to print the sum of digits of a given integer. */

function sumInt(num) {
    let sum = 0;
    while(num !== 0) {
        let rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);
    }

    console.log(`Sum of the integer is ${sum}`);
}

sumInt(123);