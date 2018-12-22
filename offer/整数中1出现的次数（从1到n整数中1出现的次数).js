// 通过js相关方法实现
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    const arr = [];
    for(let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let str = arr.join('');
    const newStr = str.replace(/[^1]/g, '');
    return newStr.length;
}

console.log(NumberOf1Between1AndN_Solution(10000))
