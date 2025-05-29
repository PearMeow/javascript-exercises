const sumAll = function(start = 0, end = 0) {
  if (typeof start !== "number" || typeof end !== "number") return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  if (start % 1 !== 0 || end % 1 !== 0) return "ERROR";
  if (start > end) {
    let temp = end
    end = start;
    start = temp;
  }
  return (start + end) * (end - start + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
