/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @description {使用递归求解}
 */
var uniquePaths = function(m, n) {
    let result = 0;
    const next = (currentRow, currentCol) => {
        // row 行 col列
        if (currentCol > n || currentRow > m) {return}
        if (currentCol+1 <= n && currentRow+1 <= m) {
            result++;
        }
        next(currentRow+1, currentCol);
        next(currentRow, currentCol +1);
    }
    next(1,1);
    return result + 1;
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @description {使用动态规划算法进行解决 F(n, n) = F(n, n - 1) + F(n - 1, n)}
 */
var uniquePaths = function(m, n) {
    const result = [Array.from({ length: n }, () => 1)];
    for (let i = 1; i < m; i++) {
        result[i] = [1];
        for(let j = 1; j < n; j++) {
            result[i][j] = result[i - 1][j] + result[i][j -1];
        }
    }
    return result.pop().pop();
};

