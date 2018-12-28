// 网址：https://www.nowcoder.com/questionTerminal/661c49118ca241909add3a11c96408c8?orderByHotValue=1&mutiTagIds=593&page=1&onlyReference=false

// var n = parseInt(readline()),
//     line2 = readline().split(" "),
//     line3 = readline().split(" "),

// 使用递归方式实现
const solve1 = function (arr, k, b) {
  const maxB = b;
  function dp(i, k, lastB) {
    // 处理特殊情况
    if(i === -1) return 1;
    if (k === 0 ) return 1; // 人数选择完成 
    if(lastB <= 0 && i) {          // 如果连续选择了几个人到达上限，则只能选择最后一个
      return dp(i - 1, k, maxB);
    }
    if (i === 0) return arr[i]; // 如果到选择的最后一个人
    const a = dp(i - 1, k - 1, lastB - 1) * arr[i]; // 选择
    const b = dp(i - 1, k, maxB); // 不选择
    return Math.max(a, b);
  };
  return dp(arr.length - 1, k , b)
}

// 将递归转化成迭代求解
const solve2 = function (arr, K ,B) {
  // 维护一个三维数组记录数据, 表示当前处于数组第i个元素是，在剩余K个值的时候，位置为B时候能够获得的最大乘积
  const result = [[[]]]; 
  // 同时还需要维护一个负数数组
  const resultOdd = [[[]]];

  for(let i = 0; i < arr.length; i++) {
    for(let k = 0; k <= K; k++) {
      for(let b = 0; b <= B; b++) {
        // 初始化数组
        if (!result[i]) {
          result.push([])
          resultOdd.push([])
        }
        if(!result[i][k]) {
          result[i].push([])
          resultOdd[i].push([])
        }
        if(!result[i][k][b]) {
          result[i][k].push([]);
          resultOdd[i][k].push([]);
        }

        if(k === 0) {
          // 如果是第一行
          result[i][k][b] = 1;
          resultOdd[i][k][b] = 1;
          continue;
        }
        // 如果选择的时候，当前靠近人数为0
        if(b === 0) {
          if(i === 0) {
            // 如果是第一行
            result[i][k][b] = 1;
            resultOdd[i][k][b] = 1;
          } else {
            // 如果不是第一行,只能不选择
            result[i][k][b] = result[i - 1][k][B];
            resultOdd[i][k][b] = resultOdd[i - 1][k][B];
          }
          continue;
        }
        if(k > 0 && i === 0) {
          if (arr[i] > 0) {
            result[i][k][b] = arr[i];
            resultOdd[i][k][b] = 1;
          } else if (arr[i] < 0) {
            result[i][k][b] = 1;
            resultOdd[i][k][b] = arr[i]
          } else {
            result[i][k][b] = 1;
            resultOdd[i][k][b] = 1;
          }
          continue;
        }
        // 根据迭代原因，选择其中一项
        const result1 = result[i-1][k - 1][b - 1] * arr[i];
        const result2 = result[i - 1][k][B];
        const result3 = resultOdd[i-1][k - 1][b - 1] * arr[i];
        const result4 = resultOdd[i - 1][k][B];
        const Max = Math.max(result1, result2, result3, result4);
        const Min = Math.min(result1, result2, result3, result4);
        if (Max > 0) {
          result[i][k][b] = Max;
        } else {
          result[i][k][b] = 1;
        }
        if (Min < 0) {
          resultOdd[i][k][b] = Min;
        } else {
          resultOdd[i][k][b] = 1;
        }
      }
    }
  }

  return result[result.length - 1][K][B];
}




// 牛客网实现思路，抽离间隔子条件
const solve3 = function(arr, K, B) {
  // 代表当选择K名学生时候，以第I位学生结尾的最大可能结果，最小可能结果
  const fmax = [];
  const fmin = [];

  // 初始化数组
  for(let i = 0; i <= K; i++) {
    fmax[i] = [];
    fmin[i] = [];
    for(let j = 0; j < arr.length; j++) {
      fmax[i][j] = 0;
      fmin[i][j]= 0;
    }
  }
  // 动态规划求解
  for (let i = 0; i < arr.length; i++) {
    fmax[1][i] = arr[i];
    fmin[1][i] = arr[i];
    for (let k = 2; k <=K; k++) {
      for (let j = i-1 ; j >= 0 &&  i - j<=B ; j--) {
        // j 代表前面第j个人
        fmax[k][i] = Math.max(fmax[k][i], Math.max(fmax[k-1][j] * arr[i], fmin[k-1][j] * arr[i]));
        fmin[k][i] = Math.min(fmin[k][i], Math.min(fmax[k-1][j] * arr[i], fmin[k-1][j] * arr[i]));
      }
    }
  }
  // 最终结果
  return Math.max(...fmax[fmax.length - 1]);
}

console.log(solve([7, -15, 31, 49, -44, 35, 44, -47, -23, 15, -11, 10, -21, 10, -13, 0, -20, -36, 22, -13, -39, -39, -31, -13, -27, -43, -6, 40, 5, -47, 35, -8, 24, -31, -24, -1], 3, 31));