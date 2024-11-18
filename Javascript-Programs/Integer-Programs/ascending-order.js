
/** Sorting of array in increasing/ascending order */

function sorting(arr) {

    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {            
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] =temp;
            }
        }
    }

    return arr;
}

const numArr = [90, 70, 20, 50, 10, 60];
const sortedArr = sorting(numArr);
console.log("Sorted array in increasing order: ", sortedArr);

//or by using built-in function
console.log("Sorted array in increasing order: ", numArr.sort());