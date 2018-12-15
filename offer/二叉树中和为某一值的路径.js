/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
const getSum = (...arr) => [].concat(...arr).reduce((acc, val) => acc + val, 0);
function FindPath(root, expectNumber)
{
    // write code here
    const result = [];
    if(!root) return result;
    const find = (node, ...beforePath) => {
        beforePath.push(node.val);
        const sum = getSum(beforePath);
        if(sum > expectNumber  ) return;
        if(sum === expectNumber) return result.push(beforePath);
        
        if (node.left) find(node.left, ...beforePath);
        if (node.right) find(node.right, ...beforePath);
    }
    find(root);
    return result;
}
console.log(FindPath({
    val: 1,
    left: {
        val: 1,
        left: null,
        right: {
            val: 1,
            left: null,
            right: null,
        },
    },

    right: {
        val: 1,
        left: null,
        right: null,
    }
}, 3));
