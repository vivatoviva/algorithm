// 缓存处理相关计算结果 递归加循环
function Fibonacci(index)
{
    // write code here
    const cache = {};
    function invoke(n) {
        if( n=== 0) return 0;
        if (n === 1 || n === 2) return 1;
        if(cache[n]) return cache[n];
        cache[n - 1] = invoke(n - 1);
        cache[n - 2] = invoke(n - 2);
        return cache[n - 1] + cache[n - 2];
    }
    return invoke(index);
}

console.log(Fibonacci(100));

// 迭代循环版本
function Fibonacci(n) {
  let i = 0;
  let j = 1;
  for(let k = 0; k < n; k++) {
    j += i;
    i = j - i;
  }
  return i;
}
console.log(Fibonacci(100));

