/** Binary search: 
 * There is an integer array, Find the given number is in the array or not. */


function binarySearch(intArray, key) {
    let startIndex = 0;
    let endIndex = intArray.length-1;

    while(startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex)/2);

        if(intArray[midIndex] < key){
            startIndex = midIndex + 1;                        
        } 
        else if (intArray[midIndex] > key) {
            endIndex = midIndex - 1;
        }
        else if(intArray[midIndex] === key) {
            return true;
        } 
        else {
            return false;
        }
    }
}

let arr=[3,8,12,17,23,38,45,56]
const keyFound = binarySearch(arr, 121);
if(keyFound) {
    console.log("Key Found!")
} else {
    console.log("Key Not Found....");
}