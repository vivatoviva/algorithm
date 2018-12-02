
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
