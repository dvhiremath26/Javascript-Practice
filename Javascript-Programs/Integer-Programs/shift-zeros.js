
/** Shift zeros to the end/start of the array */

function shiftZeros(arry) {
    let count = 0;

    let resultArr = [];

    for(let num of arry) {
        if(num === 0) {
            count++;
        } else {
            resultArr.push(num);
        }
    }

    for(let i=0; i<count; i++) {
        // Shift zeros to the end
        resultArr.push(0);

        // Shift zeros to the start of the array
        // resultArr.unshift(0);
    }

    return resultArr;
}

let intArr = [0, 2, 0, 4, 0, 3, 0, 8];
const output = shiftZeros(intArr);
console.log("Shift zeros to the start : ", output);