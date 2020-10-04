function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.print = function () {
  var current = this;
  while (current.next) {
    console.log(current.val, "->");
    current = current.next;
  }
  console.log(current.val);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let node1, node2;
  if (l1.length() > l2.length()) {
    node1 = l1;
    node2 = l2;
  } else {
    node2 = l1;
    node1 = l2;
  }

  let overflow = 0;
  let num = new ListNode(null);
  while (node1) {
    const value1 = node1.val;
    const value2 = node2 && node2.val !== undefined ? node2.val : 0;
    let sum = value1 + value2 + overflow;
    let digit;
    if (sum > 9) {
      digit = sum - 10;
      overflow = 1;
    } else {
      digit = sum;
      overflow = 0;
    }
    num.push(digit);

    node1 = node1.next;
    node2 = node2 && node2.next;
  }
  if (overflow) {
    num.push(overflow);
  }

  return num;
};

ListNode.prototype.length = function () {
  var current = this;
  if (current.val === null) return 0;
  var length = 1;

  while (current.next) {
    current = current.next;
    length++;
  }
  return length;
};

ListNode.prototype.push = function (val) {
  if (this.val === null) {
    this.val = val;
  } else {
    var current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(val);
  }
};

const num1 = new ListNode(5);
num1.push(4);
num1.push(7);

// num1.print();

const num2 = new ListNode(5);
// num2.push(5);
num2.push(6);
num2.push(6);
num2.push(6);
// num2.next.next = new ListNode(4);
num1.print();
num2.print();

addTwoNumbers(num1, num2).print();
