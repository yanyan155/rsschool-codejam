var assert = require('chai').assert;
var make = require('./src/make');
var recursion = require('./src/recursion');
var summOfOther = require('./src/sumOfOther');


describe('make', function(){

  var sum = function(a, b) {
    return a + b;
  }
  it('should return currect calculated value', function(){
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });
});

describe('summOfOther', function(){
  
  var arr = [2, 3, 4, 1];
  var check = [8, 7, 6, 9];

  it('should return array with arguments equal to check array arguments', function(){
    var res = summOfOther(arr);
    check.forEach((elem,i) => {
      assert.equal(elem,res[i]);
    })
  });
});

describe('recursion', function(){
  
  var tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
  var check = [[100], [90, 120], [70,99,110,130]];

  it('should return array with arguments equal to check array arguments', function(){
    var res = recursion(tree);
    check.forEach((elem,i) => {
      elem.forEach((val,j) => {
        assert.equal(val,res[i][j]);
      })
    })
  });
});
