function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 使用递归的方式
function IsBalanced_Solution(pRoot)
{
    // write code here
    function isBalanced_left(root, max) {
      if(!root) return true;
      if (root.val > max) {
        
        return false;
      }

      if (root.left && root.left.val > root.val) {
        return false;
      }

      if (root.right && (root.left.val < root.val || root.left.val > max)) {
        return false;
      }
      return isBalanced_left(root.left, root.val) && isBalanced_right(root.right, root.val)
    }
    
    function isBalanced_right(root, min) {
      if(!root) return true;

      if (root.val < min) {
        return false;
      }

      if (root.left && root.left.val > root.val) {
        return false;
      }

      if (root.right && (root.left.val < root.val || root.left.val < min)) {
        return false;
      }
      return isBalanced_left(root.left, root.val) && isBalanced_right(root.right, root.val)
    }

    return isBalanced_left(pRoot.left, pRoot.val) && isBalanced_right(pRoot.right, pRoot.val);
}

const node = new TreeNode(1);
console.log(IsBalanced_Solution(node))