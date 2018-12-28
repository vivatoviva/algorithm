// 求解问题,使用贪心算法
const solveA = (aArr, bArr) => {

};

// 求解问题，使用动态规划
const solveB = (arrOne, arrTwo) => {
  // 使用动态规划的思路解决
  const result = [[]];
  let maxNumber = 0;
  arrOne = arrOne.split('');
  arrTwo = arrTwo.split('');
  arrOne.unshift(0);
  arrTwo.unshift(0);

  // 初始化数组
  for (let i = 0; i < arrOne.length; i += 1) {
    result[i] = [];
    for (let j = 0; j < arrTwo.length; j += 1) {
      result[i][j] = 0;
    }
  }
  // 构建结果矩阵
  for (let i = 1; i < arrOne.length; i += 1) {
    for (let j = 1; j < arrTwo.length; j += 1) {
      if (arrOne[i] === arrTwo[j]) {
        result[i][j] = result[i - 1][j - 1] + 1;
        maxNumber = Math.max(maxNumber, result[i][j]);
      } else {
        result[i][j] = 0;
      }
    }
  }
  return maxNumber;
};
console.log(solveB('1AB2345CD', '12345EF'));
