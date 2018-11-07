function make(...args) {
  let store = [...args];
  function recursion(...elemens) {

    const isNan = isNaN(elemens[0]);

    if (!isNan) {
      store = [...store, ...elemens];
      return recursion;
    };
      const fn = elemens[0];
      const res = store.reduce((prev, curr) => fn(prev, curr));
      return res;
    }
  }

  return recursion; // eslint-disable-line
}

module.exports = make;
