const palindromes = function(str = "") {
  if (str.length <= 1) return true;
  let arr = str.toLowerCase().split("").filter(curr => {
    return ((curr.charCodeAt(0) >= "a".charCodeAt(0) && curr.charCodeAt(0) <= "z".charCodeAt(0)) ||
      (curr.charCodeAt(0) >= "1".charCodeAt(0) && curr.charCodeAt(0) <= "9".charCodeAt(0)));
  });
  for (let i = 0; i < arr.length / 2; ++i) {
    if (arr[i] != arr[arr.length - i - 1]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
