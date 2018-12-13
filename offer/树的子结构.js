/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 迭代思想实现 （中序遍历）

function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if (!pRoot1 || !pRoot2) {
      return false;
    }

    return isEuqal(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}

// 判断两个节点是不是相同
function isEuqal(root1, root2) {
  if (!root2) {
    return true;
  }
  if (!root1) {
    return false;
  }
  if (root1.val !== root2.val) return false;
  return isEuqal(root1.left, root2.left) && isEuqal(root1.right, root2.right);
}


console.log(HasSubtree({val: 2, left: {
  val:3, left: null, right: null,
}, right: null}, {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null
  },
  right: null,
}));

