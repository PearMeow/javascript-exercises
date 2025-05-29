const removeFromArray = function(arr = []) {
  for (let i = 1; i < arguments.length; ++i) {
    let index = -1;
    do {
      index = arr.indexOf(arguments[i]);
      if (index != -1) arr.splice(index, 1);
    } while (index != -1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
