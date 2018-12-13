/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if (!root) return undefined;
    Mirror(root.left);
    Mirror(root.right);
    const item = root.left;
    root.left = root.right;
    root.right = item;
    return root;
}
