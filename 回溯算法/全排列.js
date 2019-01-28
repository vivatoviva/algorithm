/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description {给定一个没有重复数字的序列，返回其所有可能的全排列}
 * @description{使用回溯算法进行求解}
 */
var permute = function(nums) {
    const results = [];
    const bfs = (result, nums) => {
        // 终止条件
        if (!nums.length) {
            results.push(result);
        }
        // find solve
        for (let i = 0; i < nums.length; i += 1) {
            bfs([...result, nums[i]], nums.filter(item => item !== nums[i]));
        }
    }
    bfs([], nums);
    return results;
};
console.log(permute([1,2,3]))
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description {leetcode类似做法}
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [nums]
    }
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var restNums = nums.slice(0, i).concat(nums.slice(i+1));
        var nextRes = permute(restNums);
        for (item of nextRes) {
            item.unshift(nums[i]);
            result.push(item)
        }
    }
    return result
}