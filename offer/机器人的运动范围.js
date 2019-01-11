function movingCount(threshold, rows, cols)
{
    // write code here
    // 广度优先遍历算法
    let result = 0;
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // 求出 i，j的数位之和，和threshold进行对比
        if (getDigitSUM(i, j) <= threshold) {
          result++;
        }
      }
    }
    return result;
}

// i 和 j 的数位之和
function getDigitSUM(i, j) {
    // 使用字符串方法来解决这个问题
    const item = [...i.toString().split(""), ...j.toString().split('')];
    let value = 0;
    item.forEach(currentVlaue => value += parseInt(currentVlaue));
    return value;
}
