// store the first element as the smallest value you've seen so far
// compare this item to the next item in the array until you find a smaller number
// if smaller number is found, designate the smaller nmber to be the new "minimnum"
// and continue untill the end of the array.
// if the minimum number is not the value (index) you initially began with swap the two values
// repeat until the array is sorted.

//  function selectionSort(arr){
//      for(var i = 0; i < arr.length; i++){
//          var lowest = i;
//          for(var j = i + 1; j < arr.length; j++){
//              if(arr[j] < arr[lowest]){
//                  lowest = j;
//              }
//          }
//          var temp = arr[i];
//          arr[i] = arr[lowest];
//          arr[lowest] = temp;
//      }
//      return arr;
//  }

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);
