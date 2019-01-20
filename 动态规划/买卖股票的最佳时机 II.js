/**
 * @param {number[]} prices
 * @return {number}
 * @description {动态规划求解，使用函数}
 */
var maxProfit = function(prices) {
    // 构建前缀表
    const prefix = [];
    for(let i = 0; i < prices.length; i++) {
        prefix[i] = [];
        for(let j = i - 1; j >= 0; j--) {
            if (prices[i] > prices[j]) {
                const value = prices[i] - prices[j];
                const startIndex = j;
                prefix[i].push([value, startIndex])
            }
        }
    }
    // 根据前缀表进行求解
    const result = [0]; // 存放结果数组
    for(let i = 1; i < prefix.length; i++) {
        let profits  = 0;
        const options = prefix[i];
        // 和所有路径对比得到最大值
        for (let j = 0; j < options.length; j++) {
            const [value, startIndex] = options[j];
            const currentValue = value + result[startIndex - 1];
            if (currentValue > profits) {
                profits = currentValue;
            }
        }
        // 放弃自身得到最大值
        if (result[i - 1] > profits) {
            profits = result[i - 1];
        }
        result[i] = profits;
    }
    return result.pop();
};

console.log(maxProfit([7,1,5,3,6,4]));
