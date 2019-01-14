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
var mergeTwoLists = function(l1, l2) {
    let node = new ListNode('start');
    const head = node;

    while(l1 || l2) {
      let value = 0;
      if (l1 && l2) {
          if (l1.val < l2.val) {
            value = l1.val;
            l1 = l1.next;
          } else {
            value = l2.val;
            l2 = l2.next;
          }
      } else if (l1) {
        value = l1.val;
        l1 = l1.next;
      } else {
        value = l2.val;
        l2 = l2.next;
      }
      node.next = new ListNode(value);
      node = node.next;
    }
    return head.next;
};
