/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 节点数据类型
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description {使用递归的方式解决}
 */
var reverseListRecursive = function(head) {
    let node = null; // 代表新构建的头结点
    const reverse = (head) => {
      if (head === null) return head;
      const parentNode = reverse(head.next);

      if (parentNode === null) {
        node = head;
        return head;
      } else {
        parentNode.next = head;
        head.next = null;
        return head;
      }
    }
    reverse(head);
    return node;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description {使用迭代的方式解决, 使用两个指针进行遍历寻找}
 */
let reverseListIteration = (head) => {
  let phead = head;
  let previousNode = head;
  while(phead) {
    if (previousNode === phead) {
      phead = phead.next;
      previousNode.next = null;
      continue;
    }
    const currentNode = phead;
    phead = phead.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
  }
  return previousNode;
}

// 测试数据
const head = new ListNode(5);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
console.log(reverseListIteration(head));
