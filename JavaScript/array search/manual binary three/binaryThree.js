class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function oneToSeven() {
  const left = new Node(1);
  const right = new Node(7);

  return new Node(4, left, right);
}

function tenToFifty() {
  const tenNode = new Node(10);
  const fortyNode = new Node(40, tenNode);
  const fortySixNode = new Node(46);
  const fiftyNode = new Node(50, fortySixNode);

  return new Node(45, fortyNode, fiftyNode);
}

function negativeToPositive() {
  const nTwenty = new Node(-20);
  const nSeventeen = new Node(-17);
  const nNineteen = new Node(-19, nTwenty, nSeventeen);
  const one = new Node(1);
  const zero = new Node(0, null, one);
  const ten = new Node(10);
  const two = new Node(2, zero, ten);

  return new Node(-15, nNineteen, two);
}

export default {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive,
};
