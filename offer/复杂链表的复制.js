function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
// 方法一
function Clone(pHead)
{
    // 构建列表
    let head = new RandomListNode(0); // 指向新临时队列的头部
    let pItem = head; // 临时指向新构造的函数
    while(pHead) {
        pItem.next = new RandomListNode(pHead.label);
        pItem.next.random = pHead;
        pHead = pHead.next;
        pItem.next.random.next = pItem.next;
        pItem = pItem.next;
    }
    head = head.next;
    pItem = head;

    // 复制random函数
    while(pItem) {
        const item = pItem.random;
        // 处理新队列random指向问题
        pItem.random = null;
        // (这条语句存在语言特性问题，所以必须添加前面的语句)
        pItem.random = item.random.next;
        pItem = pItem.next;
    }
    return head;
}
const node1 = new RandomListNode(1);
const node2 = new RandomListNode(2);
node1.next = node2;
node1.random = node2;
node2.random = node1;
const node = Clone(node1);
console.log(node.next.random === node)

// 方法二
// function Clone() {

// }