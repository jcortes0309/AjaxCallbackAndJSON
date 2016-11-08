// CPS: 1
//
// Rewrite the following code (both the function and the code calling the function) in continuation-passing style (CPS):

function square(num) {
  return num * num;
}

var squared = square(5);

function squareCPS(num, callback) {
  callback(num * num);
}

var squared = squareCPS(5, function(squared) {
  console.log('The squared number is: ', squared);
});
