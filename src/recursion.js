function recursion(tree) {

  var nodes = [];
  var ordered = [];

  function going(tree,level) {
    level++;
    var obj = {
      value: tree.value,
      level: level
    }
    nodes.push(obj);
    if(tree.left) {
      going(tree.left, level);
    }
    if(tree.right) {
      going(tree.right, level);
    }
  }

  going(tree, 0);

  nodes.sort((a,b) => b.level - a.level);

  for(var i = 1; i<=nodes[0].level; i++) {

    var filter = nodes.filter(elem => elem.level === i);
    var toPush = filter.map(elem => elem.value);
    ordered.push(toPush);
  }

  return ordered;
}

module.exports = recursion;