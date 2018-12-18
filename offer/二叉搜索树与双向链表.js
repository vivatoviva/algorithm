/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 借助栈实现的方法
function Convert(pRootOfTree)
{
    // write code here
    // 中序遍历，按照left前，right后
    const nodeList = [];
    inOrder(pRootOfTree, node => nodeList.push(node));
    for (let i = 0, len = nodeList.length; i < len; i++) {
      // right赋值
      if(nodeList[i + 1]) {
        nodeList[i].right = nodeList[i+1];
      } else {
        nodeList[i].right = null;
      }
      // left赋值
      if (i >= 1) {
        nodeList[i].left = nodeList[i - 1];
      } else {
        nodeList[i].left = null;
      }
    }
    return nodeList[0] || null;
}
// 中序列变化
function inOrder(root, nodeFun) {
  if(!root) return;
  if(root.left) inOrder(root.left, nodeFun);
  nodeFun(root);
  if(root.right) inOrder(root.right, nodeFun);
}

