/**
 * @param {string} s
 * @return {string}
 * @description {暴力方法就是找出字符串所有子串，然后找出最长的回文字符串}
 * @description {寻找规律，我们发现，字符长度为偶数的中间两个字符相等，字符长度为奇数的关于回文字符串
 * 关于中间字符串对称}
 */

var longestPalindrome = function(s) {
  const result = [];
  let maxLength = 0;
  let maxStr = '';
  const addResult = (i, j) => {
    const currentResult = [];
    
    while(i != -1 && j != s.length && s[i] == s[j]) {
      if (i == j ) {
        currentResult.push(s[i])
      } else {
        currentResult.push(s[j]);
        currentResult.unshift(s[i]);
      }
      i--;
      j++;
    }
    if (currentResult.length > maxLength) {
      maxStr = currentResult.join("");
      maxLength = currentResult.length;
    }
    result.push(currentResult);
  }

  for(let i = 0 ; i < s.length; i++) {
    // 奇数情况
    addResult(i, i);
    // 偶数情况
    if (i + 1 < s.length && s[i + 1] === s[i]) {
      addResult(i, i+1);
    }
  }
  return maxStr;
};
console.log(longestPalindrome('a'))