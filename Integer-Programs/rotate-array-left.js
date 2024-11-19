

/** Rotate array with 'k' times to left */
function rotateArray(arr, k) {
    let n = arr.length-1;

    for(let i=0; i<k; i++) {
        let first = arr[0];
        for(let i=0; i<n; i++) {
            arr[i] = arr[i+1];
        }
        arr[n] = first;
    }
    console.log(`Rotated array with ${k} time to left: `, arr);
}


let arr = [1, 2, 3, 4, 5, 6];
const k = 2;
rotateArray(arr, k);