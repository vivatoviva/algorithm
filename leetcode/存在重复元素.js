/**
 * @param {number[]} nums
 * @return {boolean}
 * @description{使用字典进行记录 或者 使用ES6中set结构}
 */
var containsDuplicate = function(nums) {
    // const map = {}; 
    // for(let i = 0; i < nums.length; i++) {
    //   if (!map[nums[i]]) {
    //     map[nums[i]] = true;
    //   } else {
    //     return true;
    //   }
    // }
    // return false;
    return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([3,5,4]))