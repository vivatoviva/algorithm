/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let result = 0;
  const INT_MIN = Math.pow(-2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;
  str = str.trim();
  let isNegative = false;
  for(let i = 0; i < str.length; i++) {
      const currentValue = str[i];
      if (['-', '+'].includes(currentValue) && i == 0) {
          if (currentValue == '-') {
            isNegative = true;
          }
          continue;
      }
      if (currentValue >= '0' && currentValue <= '9') {
          if (result == '0') {
              result = Number(currentValue);
          } else {
              result = result * 10 + Number(currentValue);
          }
      } else {
        break;
      }
  }
  result = isNegative ? -1 * result : result;
  // 判断有没有超出范围
  if (result < INT_MIN) {
    result = INT_MIN;
  }
  if (result > INT_MAX) {
    result = INT_MAX;
  }
  return result;
};
