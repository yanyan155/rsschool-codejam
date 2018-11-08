const assert = require('chai').assert;
const make = require('./src/make');
const recursion = require('./src/recursion');
const summOfOther = require('./src/sumOfOther');

const add = (a, b) => {
  return a + b;
}
const subsract = (a, b) => {
  return a - b;
}
const tree1 = {
  "value":100,
  "left":{
    "value":90,
    "left":{
      "value":70
    },
    "right":{
      "value":99
    }
  },
  "right":{
    "value":120,
    "left":{
      "value":110
    },
    "right":{
      "value":130
    }
  }
};
const tree2 = {
  "value":100,
  "left":{
    "value":90
  },
  "right":{
    "value":120
  }
};

describe('summOfOther', () => {
  it('0', () => {
    const result = summOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('1', () => {
    const result = summOfOther([8, 7]);
    assert.deepEqual(result, [7,8]);
  });

  it('2', () => {
    const result = summOfOther([1, 3, 5]);
    assert.deepEqual(result, [8, 6, 4]);
  });
});

describe('make',  () => {
  it('0', () => {
    const result = make(5)(22, 11)(add);
    assert.equal(result, 38);
  });

  it('1', () => {
    const result = make(5)(22, 11)(subsract);
    assert.equal(result, -28);
  });
});

describe('recursion', () => {
  it('0', () => {
    const result = recursion(tree1);
    assert.deepEqual(result, [[100], [90, 120], [70,99,110,130]]);
  });

  it('1', () => {
    const result = recursion(tree2);
    assert.deepEqual(result, [[100], [90, 120]]);
  });
});
