function recursion(tree) {
  const nodes = [];
  const ordered = [];

  function going(level) {
    level++; // eslint-disable-line no-param-reassign
    const obj = {
      value: tree.value,
      level,
    };
    nodes.push(obj);
    if (tree.left) {
      going(tree.left, level);
    }
    if (tree.right) {
      going(tree.right, level);
    }
  }

  going(tree, 0);

  nodes.sort((a, b) => b.level - a.level);

  for (let i = 1; i <= nodes[0].level; i++) {
    const filter = nodes.filter(elem => elem.level === i);
    const toPush = filter.map(elem => elem.value);
    ordered.push(toPush);
  }

  return ordered;
}

module.exports = recursion;
