// 重建二叉树
// 传入前序遍历和中序遍历，生成对应的二叉树
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length === 0 || vin.length === 0) return null;
  
    const nowValue = pre.shift();
    const newPre = pre;
    const leftVin = [];
    const rightVin = [];
 
    
    let findValue = false;
    for(let i = 0, len = vin.length; i < len; i++) {
        if(nowValue === vin[i]) {
            findValue = true;
            continue;
        }
        if(!findValue) {
            leftVin.push(vin[i]);
        } else {
            rightVin.push(vin[i])
        }
    }
    
    let leftPre = [];
    let rightPre = [];
    const len = leftVin.length;
    leftPre = newPre.splice(0, len);
    rightPre = newPre;
    const node = new TreeNode(nowValue);
    node.left = reConstructBinaryTree(leftPre, leftVin);
    node.right = reConstructBinaryTree(rightPre, rightVin);
    return node;   
}
console.log(reConstructBinaryTree([2,4,7], [4,7,2]))
