//2 arguments function that return the minor argument

function min(x,y) {

  if (x > y) return y

  else return x;

}

console.log(min(-10,46));

//isEven Recursive function

function isEven(x) {

  if (x == 0) return true;

  else if (x == 1) return false;

  else if (x < 0) return isEven(-x);

  else return isEven(x - 2);

}

console.log(isEven(50));

//Char counter in a string

function countChar(string, char) {

  var counter = 0;

  for (var i = 0; i < string.length; i++) {

     if (string.charAt(i) === char) counter++;

  }

  return counter;

}

console.log(countChar("AbAco", "A"));
