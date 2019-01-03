function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False

    for(let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (numbers.indexOf(number, i+1) !== -1) {
        duplication[0] = number;
        return true;
      }
    }
    return false;
}

console.log(duplicate([2,1,3,1,4],[]));
