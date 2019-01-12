/**
 * @param {number[]} nums
 * @return {number[][]}
 * @deprecated {找出三个数，使其相加为0}
 * @deprecated {
 * 首先fixed一个数字,这个数字是正数
 * 则问题简化为找出两个数之和等于fixed这个数的负数（双指针方法）
 * 因为为了保证取值唯一，所以简单可以创建一个标识数组，将每个数组的标识推入数组
 * }
 */

var threeSum = function(nums) {
    const numsSort  = nums.sort((a, b) => a - b);
    const identify = [];
    const result = [];

    // 使用双指针方法查找对应的值
    const findNum = (startIndex) => {
      const fixedValue = numsSort[startIndex];
      let i = 0,j = startIndex - 1;
      while(i < j) {
        let currentValue = numsSort[i] + numsSort[j];
        if (currentValue === -1 * fixedValue) {
          const currentValue = [numsSort[i], numsSort[j], numsSort[startIndex]];
          if(!identify.includes(currentValue.join(''))) {
            identify.push(currentValue.join(''));
            result.push(currentValue);
          }
        }
        if (currentValue  < -1 * fixedValue) {
          i++;
        } else {
          j--;
        }
      }
    }
    // 寻找符合条件的解
    for(let i = 0; i < numsSort.length; i++) {
      if (numsSort[i] >= 0) {
        findNum(i);
      }
    }
    return result;
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))