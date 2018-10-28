function make(...args) {
  var store = [...args];
  var res;
  
  function recursion(...elemns) {

    var isNan = isNaN(elemns[0]);

    if (!isNan) {
      store = [...store, ...elemns];
      return recursion;
    } else {
      var fn = elemns[0];
      var res = store.reduce((prev, curr) => fn(prev, curr));
      return res;
    }
  }

  return recursion;
}

module.exports = make;