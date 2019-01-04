function ListNode(x){
    this.val = x;
    this.next = null;
}

//  例如，链表1->2->3->3->3->4->4->5 处理后为 1->2->5
function deleteDuplication(pHead)
{
    // write code here
    //  需要两个指针
    let head = pHead;
    let node = null; // 指向头结点
    let newHead = null;// 指向新链表节点的头
    let lastPoint = null;
    while(head) {
      // 判断head是不是重复节点
      let isRepeat = false;
      // 判断有没有和前一个节点相等
      if (lastPoint) {
        if (lastPoint.val === head.val) {
          isRepeat = true;
        }
      }
      // 判断有没有和后一个节点相等
      if (head.next) {
        if (head.val === head.next.val) {
          isRepeat = true;
        }
      }
      // 如果这个节点不是重复的，则进行处理
      if (!isRepeat) {
        if (!newHead) {
          newHead = head;
          node = newHead;
        } else {
          node.next = head;
          node = node.next;
        }
      }
      // 判断是不是重复的
      lastPoint = head;
      head = head.next;
      // head指向下一位的时候，同时清除node中指向的next
      if (node) {
        node.next = null;
      }
    }
    return newHead;
}
