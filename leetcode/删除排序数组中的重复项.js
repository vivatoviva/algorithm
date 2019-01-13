/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0; // 指向不重复之后数组的下标
    let j = 0; // 指向原数组的下标
    const NUMS_LNEGHT = nums.length;
    
    while(j < NUMS_LNEGHT) {
      if (nums[i] !== nums[j]) {
        nums[i+1] = nums[j];
        i++;
      }
      j++;
    }
    return i + 1;
};
console.log(removeDuplicates([1,1,2]));
