
// 实现方式 1
function each(arr, i, j) {
  let mid = arr[i];
  arr[i] = arr[j];
  arr[j]  = mid;
}
function sort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j -= 1) {
      each(arr, j, j-1);
    }
  }
}

const arr = [1,2,4,5,3,2,6,3,1];
sort(arr);
console.log(arr);

// 实现方式二
function sort2 (arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    const x = arr[i];
    let j = i - 1;
    while(j >= 0 && x < arr[j]) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = x;
  }
  return arr;
}
console.log(sort2([2,1,3,4,2,6,7,3]))