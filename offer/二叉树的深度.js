function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function TreeDepth(pRoot)
{
    // write code here
    if(!pRoot) return 0;
    let nodeList = [pRoot];
    let templist = [];
    let deep = 0;
    while (nodeList.length) {
      const node = nodeList.pop();
      if (node.left) {
        templist.push(node.left);
      }
      if (node.right) {
        templist.push(node.right);
      }
      if (nodeList.length === 0) {
        nodeList = [...templist];
        templist = [];
        deep++;
      }
    }
    return deep;
}

// 递归实现的方式

function TreeDepth(pRoot) {
  if(!pRoot) return 0;
  return 1 + Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right));
}