/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let phead = head;
    let queue = [];
    while (phead) {
      if (queue.includes(phead)) {
        return true;
      }
      queue.push(phead);
      phead = phead.next;
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 * @descript { 就是用两个指针，一个跑的快一个跑的慢，那么如果有环的话，跑的快的一定会追满的一圈。 }
 */
let hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
}
