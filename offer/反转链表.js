/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    let head;
    while(pHead) {
        let item = pHead.next;
        pHead.next = head;
        head = pHead;
        pHead = item;
    }
    return head;
}
console.log(ReverseList({ val: 1, next: { val: 2, next: null }}));
