// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法

// 递归实现 (正向解决)
// function jumpFloor(number)
// {
//     // write code here
//     let num = 0;
//     const invoke = (n) => {
//         if(n == 0) {
//             return num++;
//         }
//         if(n >= 2) invoke(n-2);
//         invoke(n - 1);
//     }
//     invoke(number);
//     return num;
// }


// // 反向解决
// function jumpFloor(number) {
//   if(number === 1) return 1;
//   if(number === 2) return 2;
//   return jumpFloor(number - 1) + jumpFloor(number - 2);
// }

// 动态规划实现
function jumpFloor(number) {
  if(number <= 0) return 0;
  if(number === 1) return 1;
  if(number === 2) return 2;  
  let i = 1;
  let j = 2;
  for (let k = 3; k <= number; k++) {
    j = i + j;
    i = j - i;
  }
  return j;
}
console.log(jumpFloor(4));

