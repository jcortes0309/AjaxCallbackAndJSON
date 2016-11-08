// CPS: 3
//
// Add a 1000 millisecond delay to the CPS version of the square function you wrote for the last exercise, and a 500 millisecond delay to the squareRoot function. Re-run the code and see that there's a delay before the answer is printed.

function squareCPS(num, callback) {
  setTimeout(function() {
    callback(num * num);
    console.log("Waited 1000 ms");
  }, 1000);
}

function squareRootCPS(num, callback) {
  setTimeout(function() {
    callback(Math.sqrt(num));
    console.log("Waited 500 ms");
  }, 500);
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
