// https://www.nowcoder.com/questionTerminal/5b14edd1b20e48ada9b7801b3068b4be?orderByHotValue=1&mutiTagIds=593&page=1&onlyReference=false

// 使用动态规划，迭代方法实现
// eslint-disable-next-line func-names
const solve = function (pArr, wArr, totalWeight) {
  // eslint-disable-next-line func-names
  const dp = function (i, weight) {
    if (i === -1) {
      return 0;
    }
    const p = pArr[i]; // 当前商品价值
    const w = wArr[i]; // 当前商品重量
    // 如果当前重量小于剩余重量，所以直接返回下一项的最佳解
    if (weight < w) {
      return dp(i - 1, weight);
    }
    return Math.max(dp(i - 1, weight - w) + p, dp(i - 1, weight));
  };

  return dp(pArr.length - 1, totalWeight);
};

// eslint-disable-next-line no-console
console.log(solve([4, 8, 15, 1, 6, 3, 100], [5, 3, 2, 10, 4, 8, 1], 20));


// 使用迭代的方法实现
const solveWay = (pArr, wArr, totalWeight) => {
  const arr = []; // 选择第i个结尾，剩余重量为j的时候，能够获得的最大值
  // 初始化数组
  for (let i = 0; i < pArr.length; i += 1) {
    arr[i] = [];
    for (let j = 0; j <= totalWeight; j += 1) {
      if (i === 0 && wArr[i] < j) {
        arr[i][j] = pArr[i];
      } else {
        arr[i][j] = 0;
      }
    }
  }
  // 使用反向求解，得到最优解
  for (let i = 1; i < pArr.length; i += 1) {
    for (let j = wArr[i]; j <= totalWeight; j += 1) {
      const a = arr[i - 1][j - wArr[i]] + pArr[i];
      const b = arr[i - 1][j];
      arr[i][j] = Math.max(a, b);
    }
  }
  return arr[arr.length - 1].pop();
};
console.log(solveWay([4, 8, 15, 1, 6, 3, 100], [5, 3, 2, 10, 4, 8, 1], 20));
