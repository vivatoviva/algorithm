/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    // 使用数组作为记录
    let head = pHead;
    let node = null;
    let array = [];
    while(head) {
      const item = head;
      // 如果找到对应的节点
      if(array.indexOf(item) !== -1) {
        node = head;
        break;
      }
      array.push(head);
      head = head.next;
    }
    return node;
}
