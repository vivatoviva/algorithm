function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function isSymmetrical(pRoot)
{
    // write code here
    if (!pRoot) {
      return true;
    }
 
    // 递归判断是不是相等
    const isOK = (leftNode, rightNode)  => {
      if (!leftNode && !rightNode) {
        return true;
      }
      if (leftNode && rightNode) {
        return leftNode.val === rightNode.val
                && isOK(leftNode.left, rightNode.right) 
                && isOK(leftNode.right, rightNode.left);
      }
      return false;
    }
    return isOK(pRoot.left, pRoot.right);
}

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(2);
node.left.left = new TreeNode(3);
node.right.left = new TreeNode(3);

console.log(isSymmetrical(node));
