//Flattening and arrays nested in a array

var arr = [[0,1,2,3], [4,5,6], [7,8,9,10], [11,12]];

var res = arr.reduce(function(a, b) {

  return a.concat(b);

});

console.log(res); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/*******************************************************************************/

//Functions as arguments of a function

function loop (start, test, update, print) {

  for (var value = start; test(value); value = update(value)) {

      print(value);

  }

}

loop(4, function(n){return n > 0}, function(n){return n -1}, console.log);

/* 4, 3, 2, 1*/

/*******************************************************************************/

//Every methods and function as arguments

function every(array, test) {

  return array.every(test);

}

console.log(every([1, 3, 5], function(n){ n < 10}));

/* true */
