function GetUglyNumber_Solution(index)
{
    // write code here
    // 算法新解算法
    const base = [2,3,5];
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
      if (!index) return minNumber;
    }
}


function GetUglyNumber_Solution1(index)
{
    // write code here
    if(index==0){return 0}
    let uglys = [1];
    let index2 = 0, index3 = 0, index5 = 0;
    for (let i = 1; i < index; i++) {
      uglys[i] = Math.min(uglys[index2] * 2, uglys[index3] * 3, uglys[index5] * 5);
      if (uglys[i] == uglys[index2] * 2) index2++;
      if (uglys[i] == uglys[index3] * 3) index3++;
      if (uglys[i] == uglys[index5] * 5) index5++;
    }
    return uglys[index - 1];
}
// console.log( === GetUglyNumber_Solution1(10000))
console.log(GetUglyNumber_Solution(10000))
console.log(GetUglyNumber_Solution1(10000))