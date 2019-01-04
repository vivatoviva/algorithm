/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
        // write code here
        if (!pRoot) return [];
        let arr = [ pRoot ];
        const result = [];
        let i = 0;
        while(arr.length) {
          const temp = [];
          result[i] = [];
          while(arr.length) {
            const node = arr.shift();
            result[i].push(node.val);
            if (node.left) temp.push(node.left);
            if (node.right) temp.push(node.right);
          }
          i++;
          arr = temp;
        }
        return result;
}