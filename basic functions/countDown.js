// function countDown(num){
//     for (var i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done");
// }


function countDownRecursion(num) {
  if (num <= 1) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDownRecursion(5);
