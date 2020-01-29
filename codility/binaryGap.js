// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let i;
  const convertToBinary = () => (N >>> 0).toString(2);
  const num = convertToBinary();

  const splitBinary = num.split('');
  const onesIndexes = [];
  let binaryGap = 0;

  // Find location of 1's
  for (i = 0; i < splitBinary.length; i++) {
    if (parseInt(splitBinary[i])) onesIndexes.push(i);
  }

  for (i = 1; i <= onesIndexes.length; i++) {
    if (binaryGap < onesIndexes[i] - onesIndexes[i - 1] - 1)
      binaryGap = onesIndexes[i] - onesIndexes[i - 1] - 1;
  }
  return binaryGap;
}
