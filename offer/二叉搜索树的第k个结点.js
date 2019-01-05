function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
// 中序遍历，第K个几点就是最小的第K个节点
function KthNode(pRoot, k)
{
    // write code here
    let index = k;
    let result = null;
    // 中序列遍历函数
    const LDR = (root,fun) => {
      if (!root) {
        return;
      }
      if (root.left) {
        LDR(root.left, fun);
      }
      fun(root);
      if (root.right) {
        LDR(root.right, fun)
      }
    }
    // 遍历找出第n的节点
    LDR(pRoot, function isOK(root) {
      index--;
      if (index === 0) {
        result = root;
      }
    })
    // 返回节点
    return result;
}

const node = new TreeNode(1);
console.log(KthNode(node, 1))
