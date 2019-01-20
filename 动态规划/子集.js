/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description {找出nums中所有子集}
 */
var subsets = function(nums) {
    const options = []; // 存放可能结果
    for (let i = 0; i < nums.length; i++) {
        options[i] = [];
        if (i === 0) {
            options[i].push([nums[0]]); // 选择
            options[i].push([]); // 不选择
        } else {
            // 进行迭代
            options[i] = [ ...options[i - 1]];
            options[i - 1].forEach(item => {
                options[i].push([...item, nums[i]]);
            })
        }
    }
    return options.pop();
};
