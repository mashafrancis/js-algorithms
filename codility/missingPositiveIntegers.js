function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let B = A.reduce((a, b) => {
    if (b < 0) return a;
    a[b] = b;
    return a
  }, []);

  if (B.length === 0) return 1;
  for (let i = 1; i < B.length; i++) {
    if (!(B[i])) return i;
  }
  return B.length;
}

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let B = A.reduce((a, b) => {
//     if (b < 0) {
//       return a;
//     }
//     a[b] = b;
//     return a
//   }, []);
//
//   if (B.length === 0) {
//     return 1;
//   }
//   for (let i = 1; i < B.length; i++) {
//     if (!(B[i])) {
//       return i;
//     }
//   }
//   return B.length;
// }

solution([1, 3, 6, 4, 1, 2]);
