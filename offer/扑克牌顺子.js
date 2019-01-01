function IsContinuous(numbers)
{
    // write code here

    // 对numbwe进行排序
    if (numbers.length!== 5) return false;
    numbers.sort();
    let index = 0;
    let lastValue;
    for(let i = 0; i < numbers.length;) {
      // 如果是大小王
      if(numbers[i] === 0) {
        index++;
        i++;
        continue;
      }
      // 如果是第一次进行比较
      if (!lastValue) {
        lastValue = numbers[i++];
        continue;
      }

      // 如果这张牌和上一张不连续
      if (lastValue !== numbers[i] - 1) {
        // 如果有大小王
        if (!index) {
          return false;
        }
        index--;
        lastValue++;
      } else {
        lastValue = numbers[i++];
      }
    }
    return true;
}
