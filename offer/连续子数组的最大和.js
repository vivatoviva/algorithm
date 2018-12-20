// 这个问题就是信息复用的相关实现

function FindGreatestSumOfSubArray(arr)
{
    // write code here
    const minNum = -(~0>>>1);
    let a = minNum; // 最小负数
    let b = 0;
    for(let item of arr) {
      b = Math.max(b + item, minNum);
      a = Math.max(a, b);
    }
    return a;
}

console.log(FindGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5]))