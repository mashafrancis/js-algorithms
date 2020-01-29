// define a function bubble sort
// start looping from with a variable called i at the end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is grwater than arr[j+1], swap the two values
// return the sorted array

function bubbleSortNaive(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// function bubbleSortRefactor(arr){
//     for(var i = arr.length; i > 0; i--){
//         for(var j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 // Swap
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// function bubbleSortRefactor(arr){
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     for(let i = arr.length; i > 0; i--){
//         for(var j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 swap(arr, j, j+1);
//             }
//         }
//     }
//     return arr;
// }

function bubbleSortRefactor(arr) {
  var noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSortRefactor([1, 3, 4, 3, 5, 6, 8, 7]);
