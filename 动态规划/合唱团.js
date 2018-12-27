// 网址：https://www.nowcoder.com/questionTerminal/661c49118ca241909add3a11c96408c8?orderByHotValue=1&mutiTagIds=593&page=1&onlyReference=false

// var n = parseInt(readline()),
//     line2 = readline().split(" "),
//     line3 = readline().split(" "),

// function solve(arr, k, b) {
//   const maxB = b;
//   function dp(i, k, lastB) {
//     // 处理特殊情况
//     if(i === -1) return 1;
//     if (k === 0 ) return 1; // 人数选择完成 
//     if(lastB <= 0 && i) {          // 如果连续选择了几个人到达上限，则只能选择最后一个
//       return dp(i - 1, k, maxB);
//     }
//     if (i === 0) return arr[i]; // 如果到选择的最后一个人
//     const a = dp(i - 1, k - 1, lastB - 1) * arr[i]; // 选择
//     const b = dp(i - 1, k, maxB); // 不选择
//     return Math.max(a, b);
//   };
//   return dp(arr.length - 1, k , b)
// }

// solve(line2, line3[0], line3[1])

// 不使用迭代的方式，使用你逆向求解

const solve = function (arr, K ,B) {
  // 维护一个三维数组记录数据, 表示当前处于数组第i个元素是，在剩余K个值的时候，位置为B时候能够获得的最大乘积
  const result = [[[]]]; 

  for(let i = 0; i < arr.length; i++) {
    for(let k = 0; k <= K; k++) {
      for(let b = 0; b <= B; b++) {
        // 初始化数组
        if (!result[i]) {
          result.push([])
        }
        if(!result[i][k]) {
          result[i].push([])
        }
        if(!result[i][k][b]) {
          result[i][k].push([]);
        }

        if(k === 0) {
          // 如果是第一行
          result[i][k][b] = 1;
          continue;
        }
        // 如果选择的时候，当前靠近人数为0
        if(b === 0) {
          if(i === 0) {
            // 如果是第一行
            result[i][k][b] = 1;
          } else {
            // 如果不是第一行,只能不选择
            result[i][k][b] = result[i - 1][k][B];
          }
          continue;
        }
        if(k > 0 && i === 0) {
          result[i][k][b] = arr[i];
          continue;
        }
        // 根据迭代原因，选择其中一项        
        result[i][k][b] = Math.max(result[i-1][k - 1][b - 1] * arr[i], result[i - 1][k - 1][B]);
      }
    }
  }
  console.log(result);

  return result[result.length - 1][K][B];
}

console.log(solve([10,2,3,4,5], 2, 1))