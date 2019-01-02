// 按照逻辑实现(思路重要)
function LastRemaining_Solution(n, m)
{
    // 初始化数组
    const arr = [];
    for(let i = 0; i < n; i++) {
      arr[i] = 0;
    }
    // 开始循环，找出最后一个
    let index = 0; // 当前学生报数
    let i = 0; // 当前指向的是哪个学生
    let num = 0; // 记录已经几个学生报数了

    while(num != n - 1) {
      // 如果这个学生还没有被选中
      if (arr[i] === 0) {
        index++;
        if (index == m) {
          arr[i] = 1;
          lastIndex = i;
          num++;
          index = 0;
        }
      }
      // 指向下一个学生
      i++;
      if (i == n) { i = 0 };
    }
    // 找出那
    return arr.indexOf(0);
}

// 递归的方法，也可以求解

function LastRemaining_Solution(n, m)
{
    // write code here
    if(n == 0){
        return -1;
    }
    if(n == 1){
        return 0;
    }else{
        return (LastRemaining_Solution(n - 1, m) + m) % n;
    }
}

console.log(LastRemaining_Solution(5000,9000))
