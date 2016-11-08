// CPS: 1.5
//
// Rewrite the following code (both of the functions and the calling code) in CPS:

// function square(num) {
//   return num * num;
// }
//
// function times2(num) {
//   return num * 2;
// }
//
// var squared = square(5);
// var result = times2(squared);
// console.log('Result is:', result);


console.log("");


function squareCPS(num, callback) {
  callback(num * num);
}

function times2CPS(num, callback) {
  callback(num * 2);
}

squareCPS(5, function(squared) {
  times2CPS(squared, function(result) {
    console.log('Result is:', result);
  });
});
