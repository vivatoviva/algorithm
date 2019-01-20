/**
 * @param {number} n
 * @return {string[]}
 * @description {回溯算法 - 深度优先}
 */
var generateParenthesis = function(n) {
    const results = []; // 存放结果
    // 判断这个结果是不是符合题目要求
    const isResult = (str) => {
        const strarray = str.split("");
        const result = [];
        for(let i = 0; i < strarray.length; i++) {
            if (result.length !== 0) {
                if (result[result.length - 1] === '(' && strarray[i] === ')') {
                    result.pop();
                    continue;
                }
            }
            result.push(strarray[i])
        }
        if (result.length === 0) {
            return true;
        }
        return false;
    }
    // 深度优先进行
    const dfs = (result, len) => {
        if (!len) {
            if (isResult(result)) {
                results.push(result);
            }
            return 0;
        }
        dfs(result + ')', len - 1);
        dfs(result + '(', len - 1);
    }
    dfs('', n * 2);
    return results;
};
console.log(generateParenthesis(3));
