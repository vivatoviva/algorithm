/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 同步思路实现
function Merge(pHead1, pHead2)
{
    // write code here
    let head;
    let p = head;
    const isFirst = (node) => {
      head  = node;
      p = head;
    }
    // 初始化初始节点
    while(pHead1 && pHead2) {
        if (pHead1.val <= pHead2.val) {
          if(!head) {
            isFirst(pHead1);
            pHead1 = pHead1.next;
            continue;
          }
          p.next = pHead1;
          pHead1 = pHead1.next;
        } else {
          if(!head) {
            isFirst();
            pHead2 = pHead2.next;
            continue;
          }
          p.next = pHead2;
          pHead2 = pHead2.next;
        }
        p = p.next;
    }
    while(pHead1) {
      if(!head) {
        isFirst(pHead1);
        pHead1 = pHead1.next;
        continue;
      }
      p.next = pHead1;
      p = p.next;
      pHead1 = pHead1.next;
    }
    while(pHead2) {
      if(!head) {
        isFirst(pHead2);
        pHead2 = pHead2.next;
        continue;
      };
      p.next = pHead2;
      p = p.next;
      pHead2 = pHead2.next;
    }
    return head;
}
console.log(Merge({val:1, next: { val: 3, next: { val: 5, next: null}}}, {}))

// 迭代思路实现

function Merge(pHead1, pHead2) {
  let head;
  if(pHead1 === null) {
    return pHead2;
  } else if (pHead2 === null) {
    return pHead2;
  }
  if (pHead1.val < pHead2.val) {
    head = pHead1;
    head.next = Merge(pHead1.next, pHead2);
  } else {
    head = pHead2;
    head.next = Merge(pHead1, pHead2.next);
  }
  return head;
}