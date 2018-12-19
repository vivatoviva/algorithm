// 使用快速排序来实现
function GetLeastNumbers_Solution(input, k)
{
    // write code here
    let result = [];
    while(true) {
      const privot = input[0];
      const [left, right] = splitWithK(input, privot);
      if(left.length === k) {
        result = result.concat(left);
        break;
      }
      if (left.length > k) {
          input = left;
          continue;
      }
      if (left.length < k) {
          result = result.concat(left);
          input = right;
          k = k - left.length;
          continue;
      }
    }
    return result.sort();
}

function splitWithK(input, value) {
    const left = [];
    const right = [];
    for (let item of input) {
      if(item <= value) {
        left.push(item);
      } else {
        right.push(item)
      }
    }
    return [left, right];
}

console.log(GetLeastNumbers_Solution([1,2,3,4,0], 2))