// function charCount(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;1
//             };
//         }
//     }
//     return obj;
// }

// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;1
//             };
//         }
//     }
//     return obj;
// }

// function charCount(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }


// Using character code instead of regular expressions

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return !(!(code > 47 && code < 58) &&    // numeric 0 - 9
    !(code > 64 && code < 91) &&    // upper alpha A - Z
    !(code > 96 && code < 123));

}

charCount("hello Masha 1234 masha!!!");
