/**
 * @param {number} n
 * @return {number}
 * @description {使用动态规划解决这个问题}
 */
var climbStairs = function(n) {
    const result = [0,1,2];
    if (n <= 2) {
      return result[n];
    }
    for(let i = 3; i <= n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result.pop();
};
