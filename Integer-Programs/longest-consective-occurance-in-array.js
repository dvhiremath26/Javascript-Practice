/** WAP to find the longest consecutive occurrence of integers in a given array. */

function longConsecutiveOccurance(arr) {
    let count = 0;
    let max = 0;

    for(let i=0; i< arr.length; i++) {
        if(arr[i] + 1 === arr[i+1]) {
            count++
        } else {
            if( max < count) {
                max = count;
            }
        }
    }

    console.log("Longest consecutive occurance in the given array is: ", max);
}

let arr = [1, 7, 0, 3, 4, 5, 6, 8, 9];
longConsecutiveOccurance(arr);