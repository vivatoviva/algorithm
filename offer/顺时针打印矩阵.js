// 自己实现，按照层次进行循环，然后按照顺序输入每一个元素，适用于n*n的数组，但是不适合1*n的数组
// function printMatrix(matrix)
// {
//     // write code here
//     let num = matrix.length / 2;
//     const len = matrix.length;
//     let nowLen = (matrix[0] && matrix[0].length) || 0;
//     const result = [];
//     if(nowLen ===0 ) return result;
//     for(let i = 0; i < num; i++) {
//       for (let j = 0; j < nowLen * 4 - 4; j++) {
//         if (j < nowLen) {
//           // 第一层
//           result.push(matrix[0 + i][j + i]);
//         } else if (j < nowLen * 2 - 2) {
//           // 第二层
//           result.push(matrix[j - nowLen + 1 + i][nowLen - 1]);
//         } else if (j < nowLen * 3 - 2) {
//           // 第三层
//           result.push(matrix[nowLen - 1 + i][3 * nowLen - 2 - j - 1 + i]);
//         } else {
//           result.push(matrix[nowLen * 4 - 4 - j][i]);
//         }
//       }
//       nowLen = nowLen - 2;
//     }
//     if (matrix.length % 2 !== 0) {
//       const index = Math.floor(num);
//       result.push(matrix[index][index])
//     }
//     return result;
// }
// console.log(printMatrix([[1],[2]]))


// 按照魔方的方式，每次输入第一行，然后删除第一行，剩余进行旋转找出重新输出第一行
function printMatrix(matrix) {
  const result = [];

  while(matrix.length > 0) {
    matrix[0].map((item) => result.push(item));
    matrix.shift();
    matrix = turn(matrix);
  }

  return result;
}
function turn(matrix) {
  // 减去第一行然后旋转返回数组
  const result = [];
  const col = matrix.length;
  if (!col) return result;
  const row = matrix[0].length;

  for(let i = 0; i < col; i++) {
    for(let j = 0; j < row; j++) {
      result[row - 1 - j] || (result[row - 1 - j] = []);
      result[row - 1 - j].push(matrix[i][j])
    }
  }
  return result;
}
console.log(printMatrix([[4,5,6], [7,8,9]]))