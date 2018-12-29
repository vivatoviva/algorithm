// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）

// 使用正则匹配的方式
// function FirstNotRepeatingChar(str)
// {
//     for(let i = 0; i < str.length; i++) {
//       const firstStr = str[i];
//       const newStr = str.replace(new RegExp(`${firstStr}`, 'g'), "");
//       if (newStr.length === str.length - 1) {
//         return i;
//       }
//     }
//     return -1;
// }

console.log(FirstNotRepeatingChar('google'));

function FirstNotRepeatingChar(str) {
  const arr = [];
  // 初始化数组
  for (let i = 0; i < str.length; i++) {
    arr[i] = 0;
  }

  for (let i = 0; i < str.length; i++) {
    let sum = -1;
    if (arr[i] === 0) {
      for(let j = i; j < str.length; j++) {
        if (str[i] === str[j]) {
          sum += 1;
          arr[j] = 1;
        }
      }
    }
    if (!sum) {
      return i;
    }
  }
  return -1;
}