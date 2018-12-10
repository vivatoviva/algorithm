function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    // write code here
    if(!head || k <= 0) return;
    let p = head; // 执行前面第k个节点；
    let i = 1;
    for(; i < k && p; i++) {
        p = p.next;
    }
    //  判断数组的第K位是否存在
    if(i !== k || !p) return;
    let kNode = head;
    while(p.next) {
        kNode = kNode.next;
        p = p.next;
    }
    return kNode;
}


console.log(FindKthToTail({val:1, next: { val: 2 ,next: null}}, 3));
