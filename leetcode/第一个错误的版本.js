/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * @description {使用二分方法进行寻找第一个错误版本}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    // 使用二分法记性进行查找
    let low = 0; // 低版本
    let hight = n - 1; // 高版本
    while(low <= hight) {
      const mid = Math.floor((low + hight) / 2);
      if (isBadVersion(mid)) {
        hight = mid - 1
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
};
