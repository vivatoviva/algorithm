
/*Definition for singly-linked list.
    function ListNode(val) {
        this.val = val;
        this.next = null;
    } */
/**
 * @param {ListNode} head
 * @param {ListNode} node
 * @return {ListNode}
 * @description {将节点插入到有序链表中}
 */
var insertNode = (head, node) => {
    let newHead = head;
    // 找出插入位置
    let insertNode = null;
    while(head && head.val < node.val) {
        insertNode = head;
        head = head.next;
    }
    // 将节点插入到数组中
    if (insertNode) {
        node.next = insertNode.next;
        insertNode.next = node;
    } else {
        node.next = newHead;
        newHead = node;
    }
    return newHead;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description {在 O(n log n) 时间复杂度和常数级空间复杂度下}
 */
var sortList = function(head) {
    let newHead = null;
    while(head) {
        const nextHead = head.next;
        head.next = null;
        newHead = insertNode(newHead, head);
        head = nextHead;
    }
    return newHead;
};
