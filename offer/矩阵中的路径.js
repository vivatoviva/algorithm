function hasPath(matrix, rows, cols, path)
{
    // write code here
    // 深度优先算法实现
    // matrix 二维矩阵 rows 行数 cols列数 path 要匹配的模式
    const str = matrix;
    matrix = [];
    const identify = []; // 标识位置数组
    // 初始化标识数组和字符数组
    for (let i = 0; i < rows; i++) {
      identify[i] = [];
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        identify[i].push(false);
        matrix[i][j] = str[j + i * cols];
      }
    }
    
    // 从一个节点开始使用递归方法进行深度遍历
    function findModel(matrix, path, { i, j}) {
      // 如果当前节点超出范围
      if (i < 0 || i >= rows || j < 0  || j >= cols) {
        return false;
      }
      const value = matrix[i][j];
      // 如果当前节点不等于path的第一个字符 || 当前节点已经找过 
      if (value != path[0] || identify[i][j] ) {
        return false;
      }
      // 迭代成功条件
      if (path.length === 1) {
        return true;
      }
      // 找出当前节点的上下左右节点位置
      let left = { i, j : j - 1 };
      let right = { i, j : j + 1 };
      let top = { i: i - 1 , j };
      let bottom = { i: i + 1 , j };
      // 更改当前节点标识符
      identify[i][j] = true;
      const isFindModal = findModel(matrix, path.substr(1), left) || 
      findModel(matrix, path.substr(1), right) || 
      findModel(matrix, path.substr(1), top) || 
      findModel(matrix, path.substr(1), bottom);
      identify[i][j] = false;
      return isFindModal;
    }
    // 开始寻找符合条件的节点
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (findModel(matrix, path, { i, j })) {
          return true;
        }
      }
    }

    return false;
}


// 使用其他方法解决这个问题
// 第一种方法就是通过函数转化数组下标到字符串下标，这样能够减少内存量占用， 实现方法如下：

function hasPath(matrix, rows, cols, path) {
    const length = matrix.length;
    const identify = []; // 标识数组
    // 初始化标识数组
    for (let i = 0; i < length; i++) {
      identify.push(false);
    }
    // 从一个节点开始使用递归方法进行深度遍历
    function findModel(matrix, path, { i, j}) {
      const sub = getSUB(i, j, cols); // 获取当前下标
      // 如果当前节点超出范围
      if (sub < 0 || sub >= length) {
        return false;
      }
      const value = matrix[sub];
      // 如果当前节点不等于path的第一个字符 || 当前节点已经找过 
      if (value != path[0] || identify[sub] ) {
        return false;
      }
      // 迭代成功条件
      if (path.length === 1) {
        return true;
      }
      // 找出当前节点的上下左右节点位置
      let left = { i, j : j - 1 };
      let right = { i, j : j + 1 };
      let top = { i: i - 1 , j };
      let bottom = { i: i + 1 , j };
      // 更改当前节点标识符
      identify[sub] = true;
      const isFindModal = findModel(matrix, path.substr(1), left) || 
      findModel(matrix, path.substr(1), right) || 
      findModel(matrix, path.substr(1), top) || 
      findModel(matrix, path.substr(1), bottom);
      identify[i][j] = false;
      return isFindModal;
    }
    // 开始寻找符合条件的节点
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (findModel(matrix, path, { i, j })) {
          return true;
        }
      }
    }

    return false;
}

function getSUB(i , j, cols) {
  return j + i * cols;
}


// 测试数据
const date = +new Date();
console.log(hasPath('ABCESFCSADEE', 3, 4, 'ABCCED'))
console.log('耗费时间：', +new Date() - date);
