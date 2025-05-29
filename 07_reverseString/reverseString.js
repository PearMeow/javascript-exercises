const reverseString = function(str = "") {
  arr = str.split("");
  newStr = "";
  for (let i = arr.length - 1; i > -1; --i) {
    newStr += arr[i];
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
