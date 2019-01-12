const hLength = readline();
const h = readline().split(" ");
const wLength = readline();
const w = readline().split(" ");

// 首先对巧克力和孩子进行排序
let hSort = h.sort((a, b)=>Number(a)-Number(b)); // 孩子
let wSort = w.sort((a, b)=>Number(a)-Number(b)); // 巧克力
let result = 0;

let i = 0; // 指向孩子
while(wSort.length) {
    const weight = wSort.shift();
    if (Number(weight) >= Number(h[i])) {
        result++;
        i++;
    }
}
console.log(result)