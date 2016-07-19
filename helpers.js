// Get input and push to an array
'use strict';

function inputToArray(input) {
  var arr = input.split('\n');
  return arr.slice(1, arr[0] + 1);
}
