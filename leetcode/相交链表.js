/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @description {}
 */
var getIntersectionNode = function(headA, headB) {
    let pheadA = headA;
    let pheadB = headB;
    while(true) {
      // 找到最终节点
      if (pheadA === pheadB) {
        return pheadA;
      }
      // 如果两个节点没有公共节点，那么在循环的过程中会同时指向最后一个节点
      if (!pheadA || !pheadB || !pheadA.next && !pheadB.next) {
        return null;
      }
      if (pheadA.next) {
        pheadA = pheadA.next;
      } else {
        pheadA = headA;
      }
      if (pheadB.next) {
        pheadB = pheadB.next;
      } else {
        pheadB = headB;
      }
    }
};
