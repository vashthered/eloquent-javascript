//Range array and sum

function range(start, end, step) {

  if (step === undefined || step === 0) step = 1;

  var arrayRange = [];

  if (step > 0) {

    for (var i = start; i <= end; i += step) {

      arrayRange.push(i);

    }

  } else {

    for (var i = start; i >= end; i += step) {

      arrayRange.push(i);

    }

  }

  return arrayRange;

}

function sumRange(arr) {

  var arraySum = 0;

  for (var i = 0; i < arr.length; i++) {

    arraySum += arr[i];

  }

  return arraySum;

}

console.log(sumRange(range(10,1,-1))); // [10,9,8,7,6,5,4,3,2,1] --> 55


/*****************************************************************************************************************/


//Reverse array function without using reverse array's method

function reverseArray(arr) {

  var newArray = [];

  for (var i = 0; i < arr.length; i++) {

    newArray.unshift(arr[i]);

  }

  return newArray;

}

function reverseArrayInPlace(arr) {

  return reverseArray(arr);

}

console.log(reverseArrayInPlace([3,2,1]));


/*****************************************************************************************************************/

//Create a list object from an array, the object must be like this:
//var list = {
//  value : 1,
//  rest : {
//    value : 2,
//    rest : {
//      value : 3,
//      rest : null
//    }
//  }
//};

function arrayToList(array) {

  var list = null;

  for (var k = array.length - 1; k >= 0; k--) {

    list = {value : array[k], rest : list}

  }

  return list;

}

console.log(arrayToList([12,43,54,65]));


/*****************************************************************************************************************/

//Match two objects

function deepEqual(a, b) {

  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

var objTest1 = {
  value : "abaco",
  terminal : 123
}

var objTest2 = {
  value : "abaco",
  terminal : 123
}

console.log(deepEqual(objTest1, objTest2));
