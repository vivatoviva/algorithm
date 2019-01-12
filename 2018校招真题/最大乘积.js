/**
 *
 *
 * @param {无序列数组} array
 * @param {需要寻找几个数} num
 * @description {要求时间复杂度：O(n)，空间复杂度：O(1)，直接使用暴力求解}
 * @description {要求时间复杂度：O(n)，空间复杂度：O(1),也可以遍历构建最大堆和最小堆实现}
 */

const numsLength = readline();
const numbers = readline().split(" ");
const findMax = (array, length) => {
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  let min1 = 0;
  let min2 = 0;

  for (let i = 0; i < length; i++) {
    const currentValue = Number(array[i]);
    // 处理最大值
    if(currentValue > max1) {
      max3 = max2;
      max2 = max1;
      max1 = currentValue;
    }else if(currentValue > max2) {
        max3 = max2;
        max2 = currentValue;
    }else if(currentValue > max3){
        max3 = currentValue;
    }
    // 处理最小值
    if(currentValue < min1){
        min2 = min1;
        min1 = currentValue;
    }else if(currentValue < min2){
        min2 = currentValue;
    }
  }
  return Math.max(max1*max2*max3, max1*min1*min2);
}
console.log(findMax(numbers, numsLength));
