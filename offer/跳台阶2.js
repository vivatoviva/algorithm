// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 实现方式如下：
function jumpFloorII(number)
{
    // write code here
    if(number <= 0) return 0;

    let result = 1;
    let ways = 1;
    for(let i = 2; i <= number; i++) {
      ways = result + 1;
      result = result + ways;
    }
    return ways;
}
console.log(jumpFloorII(2));