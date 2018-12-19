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
