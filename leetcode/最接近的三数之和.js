/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const sum = (...nums) => {
    let sumValue = 0;
    nums.forEach(item => {
      sumValue += item;
    })
    return sumValue;
}
var threeSumClosest = function(nums, target) {
    let result = [];
    const numsSort = nums.sort((a, b) => a - b);
    let minDistance = -100000;
    
    const changeDistance = (start,target,nums) => {
      const length = nums.length;
      let i = start + 1;
      let j = length - 1;
      // 两个指针夹击找到最小解决
      while(i < j) {
        const distance = target - (nums[i] + nums[j]); // 当前距离
        if (Math.abs(distance) < Math.abs(minDistance)) {
          result = [nums[start], nums[i], nums[j]];
          minDistance = distance;
        }
        if(distance > 0) {
          i++;
        } else {
          j--;
        }
      }
    }
    // 遍历寻找最接近的和
    for(let i = 0; i < nums.length - 2; i++) {
      const needFindSum = -1 * numsSort[i] + target;
      changeDistance(i, needFindSum, numsSort);
    }
    // 找出结果，返回数组的和
    return sum(...result);
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
