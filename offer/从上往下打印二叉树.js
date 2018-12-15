/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 借助一个队列实现相关需求
function PrintFromTopToBottom(root)
{
    // write code here
    if(!root) return [];
    const item = [root];
    const result = [];
    while(item.length !== 0) {
        const node = item.shift();
        if (node.left) item.push(node.left);
        if(node.right) item.push(node.right);
        result.push(node.val);
    }
    return result;
}
