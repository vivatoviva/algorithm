// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

function rectCover(number)
{
    // write code here
    if(number <= 0) return 0;
    if(number === 1) return 1;
    let i = 1;
    let j = 2;
    for (let k = 3; k <= number; k++) {
        j = j + i;
        i = j - i;
    }
    return j;
}
console.log(rectCover(3));
