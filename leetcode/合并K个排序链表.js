/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * @description {解决方法之一就是和合并两个链表相同的手段}
 * @description {解决方法之二使用分治法首先将所有的两两合并，直到最终只剩下一个链表为止}
 * @description {解决方法之三使用最小堆栈}
 */
var mergeKLists = function (lists) {
  const start = new ListNode('start');
  let node = start;

  while (!lists.every(item => item === null)) {
    let minValueIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue;
      if (minValueIndex === -1) minValueIndex = i;
      if (lists[minValueIndex].val > lists[i].val) {
        minValueIndex = i;
      }
    }
    node.next = new ListNode(lists[minValueIndex].val);
    node = node.next;
    lists[minValueIndex] = lists[minValueIndex].next;
  }
  return start.next;
};