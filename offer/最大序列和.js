function max(arr) {
    let m = 0;
    for (i = 0; i < arr.length; i++) {
        let s = 0;
        for(let j = i; j < arr.length; j++) {
          s = s + arr[j];
          m = Math.max(m, s);
        }
    }
    return m;
}
console.log(max([3,-13,19,-12,1,9,18,-16,15,-15]))

// 众数算法实现
function newMax(arr) {
    let a = 0;
    let b = 0;
    for(let item of arr) {
      b = Math.max(b+item, 0);
      a = Math.max(a,b);
    }
    return a;
}
console.log(newMax([3,-13,19,-12,1,9,18,-16,15,-15]))