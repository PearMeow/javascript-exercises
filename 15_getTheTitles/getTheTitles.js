const getTheTitles = function(arr = []) {
  return arr.reduce((list, curr) => {
    list.push(curr.title);
    return list;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
