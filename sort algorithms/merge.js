// Implement a function that will merge a sorted array
// Given two arrays, this helper function should create a new array which is also
// sorted and consists of all of the elements in the two input arrays
// This function should run in O(n + m) time and O(n + m) space and should
// not modify the parameters passed to it.

// Create an empty array, take a look at the smallest values in each input array
// If the value of 1st array is smaller than the value in the 2nd array, push the
// value in the 1st array into our results and move on to the next value in the 1st array

// If the value in the 1st array is larger than the value in the 2nd array, push the
// value in the 2nd array into our results and move on to the next value in the 2nd array

// Once we exhaust one array, push all the remaining values from the other array

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }

  return results;
}

merge([1, 10, 40], [2, 14, 99, 100]);
