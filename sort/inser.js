
// 实现方式 1
function each(arr, i, j) {
  let mid = arr[i];
  arr[i] = arr[j];
  arr[j]  = mid;
}
function sort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j -= 1) {
      each(arr, j, j-1);
    }
  }
}

const arr = [1,2,4,5,3,2,6,3,1];
sort(arr);
console.log(arr);

// 实现方式二
function sort2 (arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    const x = arr[i];
    let j = i - 1;
    while(j >= 0 && x < arr[j]) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = x;
  }
  return arr;
}
console.log(sort2([2,1,3,4,2,6,7,3]))
// 实现方式 3 - 改进（二分查找）
function sort3 (arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    const x = arr[i];
    const p = Binary_Search(arr.slice(0, i), x);
    for (let j = i; j > p; j--) {
      arr[j] = arr[j - 1];
    }
    arr[p] = x;
  }
  return arr;
}

function Binary_Search (arr, x) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === x) {
      return m;
    }
    if (arr[m] > x) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
}
console.log(sort3([1,2,3,4,5,6,21,2,1,5,6]))
// 实现方式 4 - 改进 （使用链表）函数方式实现

// 链表数据结构
function createNode(value) {
  return {
    value,
    next: null,
  }
}
// 创建链表
function createList(arr) {
  const value = arr.shift();
  if (value === undefined) {
    return undefined;
  }
  const node = createNode(value);
  node.next = createList(arr);
  return node;
}
// 打印链表
function printList(head) {
  const arr = [];
  while(head) {
    arr.push(head.value);
    head = head.next;
  }
  return arr;
}
// 迭代实现链表插入
function insert(list, node) {
  if(!list) return node;
  const head = list;
  if(head.value > node.value) {
    node.next = list;
    return node;
  } else {
    const secondHead = head.next;
    head.next = insert(secondHead, node);
    return head;
  }
}
// 实现插入数据
function insert4(list) {
  let head = list;
  let p = head.next;
  head.next = null;
  while(p) {
    const node = p;
    p = node.next;
    node.next = null;
    head = insert(head, node);
  }
  return head;
}
printList(insert4(createList([2,3,4,1,7,3,1,8,1])))
// printList(insert(createList([0]), createNode(3)))

