/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 迭代思想实现 （中序遍历）

function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if (!pRoot1) {
      return false;
    }
    if (!pRoot2) {
      return false;
    }
    if (isEuqal(pRoot1, pRoot2)) {
      return true;
    } else {
      return HasSubtree(pRoot1, pRoot2.left) || HasSubtree(pRoot1, pRoot2.right);
    }
}

// 判断两个节点是不是相同
function isEuqal(root1, root2) {
  if (root1 === null && root2 === null) {
    return true;
  }
  if (root1 === null || root2 === null) {
    return false;
  }
  if (root1.val !== root1.val) return false;
  return isEuqal(root1.left, root2.left) && isEuqal(root2.right, root2.right);
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

