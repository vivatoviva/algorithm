function GetUglyNumber_Solution(index)
{
    // write code here
    // 算法新解算法
    const base = [2, 3, 5];
    const queue = [[2], [3], [5]];
    if(index == 1) return 1;
    index--;
    while (true) {
      let minIndex = 0;
      let minNumber = queue[0][0]
      // 找到最小的数字
      for(let i = 0; i < queue.length; i++) {
        if (minNumber > queue[i][0]) {
          minNumber = queue[i][0];
          minIndex = i;
        }
      }
      // 进行移动位置处理
      queue[minIndex].shift();
      for (let i = minIndex; i < queue.length; i++) {
        queue[i].push(minNumber * base[i]);
      }
      index--;
      if(index - 1 == 1) {
        console.log(queue[0][0], queue[1][0], queue[2][0]);
        console.log(queue[2].length);
      }
      if (!index) {
        console.log(minIndex);
        console.log(queue[2].length);
        console.log(queue[0][0], queue[1][0], queue[2][0]);
        return minNumber;
      };
    }
}


function GetUglyNumber_Solution1(index)
{
  if(index == 0) {
    return 0;
  }
  var uglyArr = [1],
      two = 0,
      three = 0,
      five = 0;
  for(var i=1;i<index;i++) {
      uglyArr[i] = Math.min(uglyArr[two]*2,uglyArr[three]*3,uglyArr[five]*5);
      if(uglyArr[i]==uglyArr[two]*2){
          two++;
      }
      if(uglyArr[i]==uglyArr[three]*3){
          three++;
      }
      if(uglyArr[i]==uglyArr[five]*5){
          five++;
      }
  }
  return uglyArr[index-1];
}

console.log(GetUglyNumber_Solution(8398));
console.log(GetUglyNumber_Solution1(8399));
// for(let i = 1;; i++) {
//   if (GetUglyNumber_Solution(i) !== GetUglyNumber_Solution1(i)) {
//     console.log(i);
//     break;
//   }
// }