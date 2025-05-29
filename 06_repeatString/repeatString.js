const repeatString = function(str = "", reps = 0) {
  if (reps < 0) return "ERROR";
  let res = "";
  for (let i = 0; i < reps; ++i) res += str;
  return res;
};

// Do not edit below this line
module.exports = repeatString;
