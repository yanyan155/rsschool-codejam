
function sumOfOther(arr) {
  var summ = arr.reduce((prev, curr) => prev + curr);
  var res = arr.map(elem => summ - elem);
  return res;
}

module.exports = sumOfOther;

