function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 递归的方式求解（从上往下）
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(!pRoot) return true;
    const leftDeep = deep(pRoot.left);
    const rightDeep = deep(pRoot.right);
    if (Math.abs(leftDeep - rightDeep) <= 1) {
        // 判断左右子树是不是平衡二叉树
        return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
    }
    return false;
}
function deep(pRoot) {
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

// 优化做法，不通过遍历深度来计算（从下往上）

function IsBalanced_Solution(pRoot) {
    return !!getDeep(pRoot);
}
function getDeep(pRoot) {
    if (!pRoot) return 0;
    const leftDeep = getDeep(pRoot.left);
    const rightDeep = getDeep(pRoot.right);
    if (leftDeep - rightDeep > 1) {
        return false;
    } else {
        return 1 + Math.max(leftDeep, rightDeep);
    }
}
