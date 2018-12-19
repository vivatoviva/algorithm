// 通过字典的方式
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    const dist = {};
    numbers.map(item => {
      if(dist[item]) {
        dist[item] = dist[item] + 1
      } else {
        dist[item] = 1;
      }
    })
    const result = [];
    const maxLen = Math.floor(numbers.length / 2);
    for(let item in dist) {
      if(dist[item] > maxLen) {
        result.push(item);
      }
    }
    return result.length && result;
}
console.log(MoreThanHalfNum_Solution([1,2,3,2,4,2,5,2]))

// 第二种方法（这个称之为Boyer-Moore问题）
function MoreThanHalfNum_Solution(numbers) {
  let n = numbers.length;
  if (n == 0) return 0;
   
  let num = numbers[0], count = 1;
  for (let i = 1; i < n; i++) {
      if (numbers[i] == num) count++;
      else count--;
      if (count == 0) {
          num = numbers[i];
          count = 1;
      }
  }
  // Verifying
  count = 0;
  for (let i = 0; i < n; i++) {
      if (numbers[i] == num) count++;
  }
  if (count * 2 > n) return num;
  return 0;
}