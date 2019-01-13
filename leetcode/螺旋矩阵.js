/**
 * @param {number[][]} matrix
 * @return {number[]}
 * @description {类似于转动魔方，输出一层，然后去掉一层}
 */
var spiralOrder = function(matrix) {
    let result = [];
    // 转动矩阵函数
    const rotate = (matrix) => {
      let rotateMatrix = [];
      for(let i = 0, rowlen = matrix.length; i < rowlen; i++) {
        for(let j = 0, collen = matrix[0].length; j < collen; j++) {
          const rowIndex = collen - j - 1;
          const colIndex = i;
          if (!rotateMatrix[rowIndex]) {
            rotateMatrix[rowIndex] = [];
          }
          rotateMatrix[rowIndex][colIndex] = matrix[i][j];
        }
      }
      return rotateMatrix;
    }
    // 旋转数组找到解
    while(matrix.length) {
      const topValue = matrix.shift();
      result = [...result, ...topValue];
      matrix = rotate(matrix);
    }
    return result;
};

console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]));

