//Print a pyramid of hash marks into console.log

var hash = "#";

while (hash.length < 8) {

  console.log(hash);

  hash += "#";
  
}

//Print all the numbers between 1 and 100
//If number is divisible for 3 print "Fizz"
//If number is divisible for 5 print "Buzz"
//If number is divisible for 3 and 5 print "FizzBuzz"

for (var i = 1; i <= 100; i ++) {

  var result = "";

  if (i % 3 == 0) result += "Fizz";

  if (i % 5 == 0) result += "Buzz";

  console.log(result || i);

}

//Print a chessboard using hash marks

var chessboard = "";
var size = 8;

for (var i = 0; i < size; i++) {

  for (var j = 0; j < size; j++) {

      if ((j + i) % 2 == 0) {

        chessboard += "#"

      } else {

        chessboard += " ";

      }

    }

    chessboard += "\n";

}

console.log(chessboard);
