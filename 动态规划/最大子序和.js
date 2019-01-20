/**
 * @param {number[]} nums
 * @return {number}
 * @description {给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。}
 */
var maxSubArray = function(nums) {
    const maxResult = [nums[0]];
    let maxValue = nums[0];

    for (let i = 1;i < nums.length; i++) {
        const currentValue = Math.max(nums[i] + maxResult[i - 1], nums[i]);
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
        maxResult.push(currentValue);
    }
    return maxValue;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
