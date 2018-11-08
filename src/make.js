function make(...args) {
  let store = [...args];
  function recursion(...elemens) {
    const isNan = isNaN(elemens[0]); // eslint-disable-line no-restricted-globals

    if (!isNan && typeof elemens[0] !== 'function') {
      store = [...store, ...elemens];
      return recursion;
    }
    const fn = elemens[0];
    const res = store.reduce((prev, curr) => fn(prev, curr));
    return res;
  }
  return recursion;
}

module.exports = make;
