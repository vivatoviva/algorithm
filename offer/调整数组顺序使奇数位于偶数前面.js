// 常规实现
function reOrderArray(array)
{
    // write code here
    const first = array.filter(item => item %2 === 1);
    const last = array.filter(item => item % 2 === 0);
    return [...first, ...last];
}

console.log(reOrderArray([1,2,3,5,2,6]));

