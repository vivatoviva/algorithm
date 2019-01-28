/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    const strToNum = str => {
        let num = 0
        let len = str.length
        for (let i = 0; i < len; i++) {
            if (str[i] === '1') {
                num += 2 ** (n - i - 1)
            }
        }
        return num
    }

    let res = [0]
    let arr = Array(n).fill(0)
    let set = new Set()
    set.add(arr.join(''))
    while (res.length < 2 ** n) {
        let temp = arr.slice()
        for (let i = 0; i < n; i++) {
            temp[i] ^= 1 // 异或操作，1变0，0变1 
            let str = temp.join('')
            if (set.has(str)) {
                temp[i] = arr[i] // 若已存在，则变回去
            } else {
                set.add(str)
                res.push(strToNum(str))
                arr = temp
                break;
            }
        }
    }
    return res
};
console.log(grayCode(3));
