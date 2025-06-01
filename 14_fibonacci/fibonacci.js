const fibonacci = function(nth) {
  nth = +nth;
  if (nth < 0) return "OOPS";
  let fib = [0, 1];
  while (fib.length < nth + 1) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib[nth];
};

// Do not edit below this line
module.exports = fibonacci;
