/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * @description {
 *  存在很多种方法
 *    一种方式就就是按照我们平时计算惩罚一样，计算每一项的数值，然后将数值全部加起来就是最终的结果
 *    另一种方式就是按照位置进行计算，原理和平时计算相同，只不过考虑到进位的实现
 * }
 */
var multiply = function(num1, num2) {
    let result = [];
    let identify = [];
    // 首先构造identify集合
    for (let i = 0; i < num2.length; i++) {
      identify[i] = [];
      for(let j = 0; j < num1.length; j++) {
        identify[i].push(Number(num1[j])  * Number(num2[i]));
      }
      identify[i] = identify[i].reverse();
    }
    identify = identify.reverse();
    // 进位得到最终结果
    for (let i = 0; i < identify.length; i++) {
      for (let j = 0; j < identify[i].length; j++) {
        const index = i + j; // 当期位数
        // 计算当前位数的和
        let value = identify[i][j];
        if (result[index]) {
          value += result[index];
        }
        // 进位更新
        const currentValue = value % 10;
        const nextValue = Math.floor(value / 10);
        result[index] = currentValue;
        if (result[index + 1]) {
          result[index + 1] += nextValue;
        } else {
          result[index + 1] = nextValue;
        }
      }
    }
    // 去掉头部的 0 节点
    while(result[result.length - 1] === 0) {
      result.pop();
    }
    result = result = result.reverse();
    return result.join('') || "0";
};

console.log(multiply('9133', '10'));
