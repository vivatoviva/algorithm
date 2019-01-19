/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description {双指针方法，通过两个指针快速找到对应的节点}
 * @description {出现重复之后，慢指针返回到头结点，快指针继续，两者每次都走一步，直到相遇}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
          // 找出节点返回
          slow = head;
          while (slow && fast) {
            if (slow === fast) {
              return slow;
            } else {
              slow = slow.next;
              fast = fast.next;
            }
          }
        }

    }
    return null;
};