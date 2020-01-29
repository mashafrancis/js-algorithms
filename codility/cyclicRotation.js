// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length <= 0) return A;

  let temp;
  let previous;

  for (let i = 0; i < K; i++) {
    previous = A[A.length - 1];
    for (let j = 0; j < A.length; j++) {
      temp = A[j];
      A[j] = previous;
      previous = temp;
    }
  }
  return A;
}
