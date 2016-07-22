// Get input and push to an array
'use strict';
var args =  inputToArray(input);

// Loop through the args
for(var i =0; i < args.length; i++) {

}

function inputToArray(input) {
  var arr = input.split('\n');
  return arr.slice(1, arr[0] + 1);
}
