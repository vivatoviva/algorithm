// 牛客网实现思路

function Add(num1, num2) {
    while(num2 !==0) {
      const temp = num1;
      num1 = num1 ^ num2;
      num2 = (temp & num2) << 1
    }
    return num1;
}

console.log(Add(5,7));

// 直接通过位运算实现 (不能计算负数)
function Add(num1, num2) {
  const num1Arr = num1.toString(2).split("").reverse();
  const num2Arr = num2.toString(2).split("").reverse();
  const result = [];
  const maxLength = Math.max(num1Arr.length, num2Arr.length);
  // 进行循环求解
  for(let i = 0; i < maxLength; i++) {
    if (!num1Arr[i]) num1Arr[i] = 0;
    if (!num2Arr[i]) num2Arr[i] = 0;
    if (num1Arr[i] == 1 && num2Arr[i] == 1) {
      if (!result[i]) {
        // 如果当前已经存在值
        result[i] = 0;
      } else {
        result[i] = 1;
      }
      result[i + 1] = 1;
      continue;
    }
    if (num1Arr[i] == 1 || num2Arr[i] == 1) {
      if (!result[i]) {
        result[i] = 1;
      } else {
        result[i] = 0;
        result[i + 1] = 1;
      }
      continue;
    }
    if (!result[i]) {
      result[i] = 0;
    } else {
      result[i] = 1;
    }
  }
  const str = result.reverse().join("");
  return parseInt(str, 2);
}