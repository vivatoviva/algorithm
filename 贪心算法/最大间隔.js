// const a = readline();
// const b = readline().split(" ").map(item => parseInt(item));
// b.pop();

function getMax(first, last, arr) {
  arr.unshift(first);
  arr.push(last);
  const myArr = [];
  for (let i = 0; i < arr.length - 2; i += 1) {
    myArr.push(Math.abs(arr[i] - arr[i + 1]));
  }
  return Math.max(...myArr);
}

function solve(arr) {
  const last = arr.pop(); // 数组最后一项
  const first = arr.shift(); // 数组第一项
  let min = 999999999999;
  while (arr.length) {
    const arrMin = getMax(first, last, arr);
    min = Math.min(min, arrMin);
    // console.log(arr);
    arr = arr.pop();
  }
  return min;
}
