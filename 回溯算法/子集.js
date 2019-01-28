/**
 * @param {number[]} nums
 * @return {number[][]}
 * @descript {做成类似于二叉树的形式，进行计算求解}
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

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @descript {回溯算法进行求解}
 */
var subsets = function(nums) {
    const results = [];
    const bfs = (result, nums) => {
        if (!nums.length) {
            return results.push(result);
        }
        const currentValue = nums.pop();
        bfs([...result, currentValue], nums); // 选择当前
        bfs(result, nums);
        nums.push(currentValue);
    }
    bfs([], nums);
    return results;
};
console.log(subsets([1,2,3]));
