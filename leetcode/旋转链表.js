/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let phead = head;
    let len = 0;
    if (!phead) {
      return null;
    }
    // 得到链表长度，并将链表变为一个环形链表
    while (true) {
      len++;
      if (!phead.next) {
        phead.next = head;
        break;
      } else {
        phead = phead.next;
      }
    }
    // 根据链表长度找出平移后链表头起点，进行截断
    phead = head;
    let  targetLocation = len - (k % len);
    for(let i = 1; i <= targetLocation; i++) {
      if (i ===  targetLocation) {
        // 截断位置
        const node = phead.next;
        phead.next = null;
        phead = node;
      } else {
        phead = phead.next;
      }
    }
    return phead;
};

