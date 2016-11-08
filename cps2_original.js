// // CPS: 2
// //
// // Rewrite the following code (both of the functions and the calling code) in continuation-passing style (CPS):
//
// function square(num) {
//   return num * num;
// }
//
// function squareRoot(num) {
//   return Math.sqrt(num);
// }
//
// var x = 4;
// var y = 3;
// var answer = squareRoot(square(x) + square(y));
// console.log('The answer is: ' + answer);

// Create a new empty line
console.log("");

function squareCPS(num, callback) {
  callback(num * num);
}

function squareRootCPS(num, callback) {
  callback(Math.sqrt(num));
}

var x = 4;
var y = 3;

squareCPS(x, function(xSquared) {
  squareCPS(y, function(ySquared) {
    squareRootCPS(xSquared + ySquared, function(answer) {
      console.log('The answer is: ' + answer);
    });
  });
});
