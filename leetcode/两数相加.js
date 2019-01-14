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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let node = new ListNode('start');
    node.next = new ListNode(0);
    const head = node.next;
    while (l1 || l2) {
        let value = node.next.val;
        if (l1 && l2) {
            value += l1.val + l2.val;
        } else if (l1) {
            value += l1.val;
        } else {
            value += l2.val;
        }
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        node.next.val = value % 10;
        node.next.next = new ListNode(parseInt(value / 10));
        node = node.next;
    }
    if (node.next.val === 0) {
        node.next = null;
    }
    return head;
};

// 测试数据
const l1 = new ListNode(1);
l1.next = new ListNode(8);
const l2 = new ListNode(0);
console.log(addTwoNumbers(l1, l2));