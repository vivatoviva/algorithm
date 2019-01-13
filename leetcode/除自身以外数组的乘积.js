/**
 * @param {number[]} nums
 * @return {number[]}
 * @description{请不要使用除法，且在 O(n) 时间复杂度内完成此题}
 * @description {
 *  构建left存放当前位置左边乘积，right存放当前位置右边乘积
 * }
 */
var productExceptSelf = function(nums) {
    const leftValue = [];
    const rightValue = [];
    for(let i = 0, len = nums.length; i < len; i++) {
      let leftIndex = i;
      let rightIndex = len - i - 1;
      // 处理leftvalue
      if (leftIndex === 0) {
        leftValue.push(1);
      } else {
        leftValue.push(leftValue[leftIndex - 1] * nums[leftIndex - 1]);
      }
      // 处理rightvalue
      if(rightIndex === len- 1) {
        rightValue.push(1);
      } else {
        rightValue.unshift(nums[rightIndex + 1] * rightValue[0]);
      }
    }
    // 得到结果
    return leftValue.map((item, index) => item * rightValue[index])
};

console.log(productExceptSelf([1,2,3,4]))
