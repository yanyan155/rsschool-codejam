
function sumOfOther(arr) {
  const summ = arr.reduce((prev, curr) => prev + curr);
  return arr.map(elem => summ - elem);
}

module.exports = sumOfOther;
