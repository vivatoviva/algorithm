/**
 * @param {number} n
 * @return {number[][]}
 * @description {生成一个包含1 - n*n元素的 螺旋数组, 实现思路如上，相比上一个算法，添加一个对layer层进行赋值的步骤即可}
 */
var generateMatrix = function(n) {
    let result = [];
    let start = 1;
    // 初始化数组
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        result[i][j] = false;
      }
    }
    // 旋转赋值操作
    const rotate = (matrix, layer) => {
      let rotateMatrix = [];
      // 首先对当前层数进行赋值
      for(let i = layer; i < matrix[layer].length; i++) {
        if (matrix[layer][i] == false) {
          matrix[layer][i] = start++;
        }
      }

      // 旋转数组
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
      // 旋转之后赋值
      result = rotateMatrix;
    }

    for (let i = 0; i <= n / 2; i++) {
      const layer = i; // 代表当前赋值层数
      rotate(result, layer);
      rotate(result, layer);
      rotate(result, layer);
      rotate(result, layer);
    }
    return result;
};

console.log(generateMatrix(3));

// var generateMatrix = function(n) {
//   // 初始化数组
//   let result =  Array.from({length: n}, () => Array.from({length: n}));

//   n = n - 1;
//   let count = 1;
//   for (let i = 0; i <= n / 2; i++) {
//       // to Right;
//       if (i === n-i) {
//           result[i][i] = count;
//       }
//       for (let j = i; j < n-i; j++) {
//           result[i][j] = count++;
//       }
//       // to Bottom
//       for (let m = i; m < n - i; m ++) {
//           result[m][n - i] = count++;
//       }
//       // to Left
//       for (let p=n-i; p > i; p--) {
//           result[n - i][p] = count++;
//       }
//       // to Top
//       for (let q=n-i; q > i; q-- ) {
//           result[q][i] = count++;
//       }
//   }
//   return result;
// };
