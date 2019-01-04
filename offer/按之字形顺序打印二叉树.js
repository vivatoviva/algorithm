function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Print(pRoot)
{
    // write code here
    if (!pRoot) return [];
    let arr = [ pRoot ];
    const result = [];
    let i = 1; // 标识当前行数

    while(arr.length) {
      const temp = [];
      const isOddNumber = i % 2;
      result[ i - 1 ] = [];
      while(arr.length) {
        const node = arr.pop();
        // 将遍历结果推入数组中
        result[ i - 1 ].push(node.val);
        // 将下一步需要遍历的节点推入数组中
        if (isOddNumber) {
          if (node.left) temp.push(node.left);
          if (node.right) temp.push(node.right);
        } else {
          if (node.right) temp.push(node.right);
          if (node.left) temp.push(node.left);
        }
      }
      i++;
      arr = temp;
    }
    return result;
}

let node = new TreeNode(0);
node.left = new TreeNode(1);
node.right = new TreeNode(2);

console.log(Print(node));

/*
  另一种思路是按照顺序进行遍历，但是对于偶数层使用reserver进行转置
*/
