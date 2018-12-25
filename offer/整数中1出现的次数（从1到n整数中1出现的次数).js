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

// 硬编码实现的相关算法

function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var counts,num;
    counts = 0;
    if(n < 1){
        return 0;
    }
    for(var i = 1;i <= n;i++){
        num = i;
       //num = num%10;
        while(num > 0){
            if(num%10 == 1){
                counts++;
            }
            num = Math.floor(num/10);
        }
    }
    return counts;
}

// 编程之美中的算法（根据规律实现的相关算法）

function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    let count = 0
    let i = 1
    for (; i <= n; i *= 10) {
        let a = parseInt(n / i)
        let b = parseInt(n % i)
        count += parseInt((a + 8)/10)*i + (a%10==1)*(b+1);
    }
    return count
}

