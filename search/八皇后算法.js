// 判断皇后落子师傅合规
function invalid(nowIndex, stack) {
    const len = stack.length + 1;// 当前层数
    for(let i = 1; i < len; i++) {
        if (nowIndex === stack[i - 1] || Math.abs(nowIndex - stack[i-1]) === len - i) {
            return false;
        }
    }
    return true;
}

function solve() {
    const stack = [[]];
    const result = [];
    while(stack.length) {
        const now = stack.pop();
        if (now.length === 8) {
            result.push(now);
        } else {
            for(let i = 1; i < 9; i++) {
                if (invalid(i, now)) {
                    stack.push([...now, i])
                }
            }
        }
    }
    return result;
}
console.log(solve().length)