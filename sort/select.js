function each(arr, i, j) {
  let mid = arr[i];
  arr[i] = arr[j];
  arr[j]  = mid;
}

function sort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    each(arr, min, i);
  }
}

const arr = [1,2,3,2,1,3,0,2]
sort(arr);
console.log(arr);