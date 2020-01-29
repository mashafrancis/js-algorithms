// It will help create 3 arguments: an array, a start index, and an end index
// (these can default to 0 and the array length minus 1 respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will help keep track of where the pivot should end up)
// Loop through the array from start to end
// - If the pivot is greater than the current value, increment the pivot index variable and then swap the
//   the current element at the pivot index.
// Swap the starting element (ie the pivot) with the pivot index
// Return the pivot index

// function pivot(arr, start=0, end=arr.length+1){
//     function swap(array, i, j){
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp
//     }
//     var pivot = arr[start];
//     var swapIdx = start;

//     for(var i = start + 1; i < arr.length; i++){
//         if(pivot > arr[i]){
//             swapIdx++
//             swap(arr, swapIdx, i)
//         }
//     }
//     swap(arr, start, swapIdx)
//     return swapIdx
// }

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (array, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])
