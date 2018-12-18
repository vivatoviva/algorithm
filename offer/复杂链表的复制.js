function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
// 方法一

/* 
    算法分为两部分
    1.根据next复制节点，新节点的random指向原节点，并且将原节点的next指向新生成的节点
    2.根据第一步，通过遍历新链表，来找到random真正指向的位置
    缺点： 或破坏原节点的值
*/
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
console.log(node)

// 方法二
function Clone(pHead) {
    let head = pHead;
    // 首先复制节点
    while(pHead) {
        const node = new RandomListNode(pHead.label);
        node.next = pHead.next;
        pHead.next = node;
        pHead = node.next;
    }
    pHead = head;
    // 将绑定random值
    while(pHead && pHead.next) {
        const nextNode = pHead.next;
        nextNode.random = pHead.random.next;
        pHead = nextNode.next;
    }

    pHead = head;
    head = new RandomListNode(0); // 头结点
    let pItem = head;
    // 将新旧链表拆分
    while(pHead.next) {
        pItem.next = pHead.next;
        pHead.next = pHead.next.next;
        pItem = pItem.next;
    }
    head = head.next;
    return head;
}

function getNext(node) {
    while(node) {
        console.log(node.label);
        node = node.next;
    }
}
function getRandom(node) {
    while(node) {
        console.log(node.random.label);
        node = node.next;
    }
}