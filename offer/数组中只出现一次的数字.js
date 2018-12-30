function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    const result = [];
    const recordList = new Array(array.length);
    // 初始化数组
    for (let i = 0; i < array.length; i++) {
      recordList[i] = 0;
    }
    // 开始查找数组
    for (let i = 0; i < array.length; i++) {
      let num = -1;
      if (!recordList[i]) {
        for(let j = i; j < array.length; j++) {
          if (array[j] === array[i]) {
            recordList[j] = 1;
            num += 1;
          }
        }
      }
      if (!num) result.push(array[i]);
    }

    return result;
}

console.log(FindNumsAppearOnce([2,4,3,6,3,2,5,5]))

//  举个栗子：2  3  4  2  3
// 2 xor 3 xor 4 xor 2 xor 3 = (2 xor 2) xor (3 xor 3) xor 4= 0 xor 0 xor 4 = 4

function FindNumsAppearOnce(array) {
  // 拿到迭代的值
  const record  = array.reduce((sum, currentValue) => sum ^ currentValue);
  const code = getCode(record); // 得到第一位1的掩码
  const num1 = [];
  const num2 = [];
  // 根据掩码将数组分为两组
  for (let item of array) {
    if (item & code) {
      num1.push(item);
    } else {
      num2.push(item);
    }
  }
  // 得到最终结果
  return [ num1.reduce((sum, currentValue) => sum ^ currentValue),  num2.reduce((sum, currentValue) => sum ^ currentValue)]
}
// 找到伪码
function getCode(record) {
  let result = 1;
  let index = 0;
  if (record & 1) return 1;
  while(!((record >> index) & 1)) {
    index++;
  }
  return result << index;
}
