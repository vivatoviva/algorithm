// 简单实现

/*
    每次前进一个数，然后判断后面的数字是否等于对应的sum
    如果等于则推入sum
    反之继续循环
*/

function FindContinuousSequence(sum)
{
    // write code here
    const end = sum - 1; // 结束序列
    const start = 1;
    const result = [];
    for (let i = 1; i < end; i++) {
        let value = 0;
        const valueList = [];
        for (let j = i;j <= end && value < sum; j++) {
            value += j;
            valueList.push(j);
        }
        if (sum === value) result.push(valueList)
    }
    return result;
}

// 滑动窗口解决思路

/*
    初始化两个指针，两个指针构建出一个窗口
    当总和小于sum，大指针加价
    当总和大于sum，小指针加价
*/

function FindContinuousSequence(sum) {
    const end = sum - 1;
    let pheight = 2;
    let plow = 1;
    const result = [];

    while (pheight > plow) {
        const currentValue = (pheight + plow) * (pheight - plow + 1) / 2;
        if (currentValue === sum) {
            const valueList = [];
            for(let i = plow; i <= pheight; i++) {
                valueList.push(i);
            }
            result.push(valueList);
            plow++;
        } else if (currentValue > sum) {
            plow++;
        } else {
            pheight++
        }
    }
    return result;
}

// 根据中值来进行计算

/*
    这个序列是一个连续序列，因此这个序列的中间值代表了这个序列的平均值
    n为奇数时，序列中间的数正好是序列的平均值，所以条件为：(n & 1) == 1 && sum % n == 0；
    n为偶数时，序列中间两个数的平均值是序列的平均值，而这个平均值的小数部分为0.5，所以条件为：(sum % n) * 2 == n.
    根据等差数列的求和公式sum = (1 + n) * n / 2，得到 n < √(2*sum)
*/

function FindContinuousSequence(sum) {
    const end = Math.sqrt(2*sum); // 开方求解
    const result = [];

    for (let n = 2; n <= end; n++) {
        // 当n为奇数的时候
        const isOk = ((n & 1 === 1) && sum % n === 0) || ((n & 1) === 0 && (sum % n) * 2 === n);
        if (isOk) {
            const valueList = [];
            for (let j = 0, k = (sum / n) - (n - 1) / 2; j < n; j++, k++) {
                valueList.push(k);
            }
            // 因为题目需要顺序排列
            result.unshift(valueList);
        }
    }
    return result;
}

console.log(FindContinuousSequence(100))
