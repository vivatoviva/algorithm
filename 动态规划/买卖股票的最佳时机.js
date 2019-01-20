/**
 * @param {number[]} prices
 * @return {number}
 * 
 */
var maxProfit = function(prices) {
    const result = [[0, 0]]; // 最优解，数组第一项代表最小值位数，第二项代表当前位数的最大值
    for (let i = 1; i < prices.length; i++) {
      let [ minIndex, minResult ] = result[result.length - 1];
      let currentValue = prices[i];
      let minValue = prices[minIndex];

      // 确认当前最小值位置
      if (minValue > currentValue) {
        minIndex = i;
        minValue = currentValue;
      }
      result.push([minIndex, Math.max(currentValue - minValue, minResult)]);
    }
    return result.pop()[1];
};
console.log(maxProfit([7, 1, 5, 3, 6, 4, 10]))
