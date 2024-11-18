
/** Find Fibbonacci series */

function fibbonacci(n1, n2, num) {
    let fibboSeries = [];
    fibboSeries.push(...[n1, n2]);

    for(let i=0; i<num-1; i++) {
        let temp = n1 + n2;
        n1 = n2;
        n2 = temp;
        fibboSeries.push(temp);
    }

    return fibboSeries;
}

let n1 = 0;
let n2 = 1;
const num = 10;
const fibbonacci_series = fibbonacci(n1, n2, num);
console.log("Fibbonacci series: ", fibbonacci_series);