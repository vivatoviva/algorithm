// 网址：https://www.nowcoder.com/questionTerminal/661c49118ca241909add3a11c96408c8?orderByHotValue=1&mutiTagIds=593&page=1&onlyReference=false

var n = parseInt(readline()),
    line2 = readline().split(" "),
    line3 = readline().split(" "),

function solve(arr, k, b) {
  const maxB = b;
  function dp(i, k, lastB) {
    // 处理特殊情况
    if(i === -1) return 1;
    if (k === 0 ) return 1; // 人数选择完成 
    if(lastB <= 0 && i) {          // 如果连续选择了几个人到达上限，则只能选择最后一个
      return dp(i - 1, k, maxB);
    }
    if (i === 0) return arr[i]; // 如果到选择的最后一个人
    const a = dp(i - 1, k - 1, lastB - 1) * arr[i]; // 选择
    const b = dp(i - 1, k, maxB); // 不选择
    return Math.max(a, b);
  };
  return dp(arr.length - 1, k , b)
}

solve(line2, line3[0], line3[1]);