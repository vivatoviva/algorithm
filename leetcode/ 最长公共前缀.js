/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
      return '';
    }
    let maxPrefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
      let currentPrefix = [];
      // 进行前缀匹配
      for (let j = 0; j < maxPrefix.length; j++) {
        if (strs[i][j] === maxPrefix[j]) {
          currentPrefix.push(strs[i][j]);
        } else {
          break;
        }
      }
      // 返回最长前缀
      if (currentPrefix.length === 0) {
        return '';
      } else {
        maxPrefix = currentPrefix.join('');
      }
      console.log(maxPrefix)
    }
    return maxPrefix;
};

console.log(longestCommonPrefix(["aca","cba"]))
