
/** WAP to reverse an array. */

function reverseArr(arr) {
    console.log("Array before reverse: ", arr)
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex < rightIndex) {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }

    console.log("Array after reverse: ", arr)

}

let arr = [1, 2, 3, 4, 5];
reverseArr(arr);