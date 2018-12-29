function GetNumberOfK(data, k)
{
    // write code here
    let num = 0;
    for(let item of data) {
      if (item === k) {
        num++;
      }
    }
    return num;

}

// 使用二分查找方法进行查找
function GetNumberOfK(data, k) {
  const length = data.length;
  let num = 0;
  let left = 0;
  let right = length - 1;
  let mid;
  // 寻找位置
  while(left <= right) {
    mid = Math.floor((left + right) / 2);
    if(data[mid] == k) {
      num++;
      break;
    }
    if(data[mid] < k) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }
  console.log(left, right, mid)
  // 说明查到相等的
  if (num) {
    // 左边查找
    for(let i = mid; i >= 0; i--) {
      if (data[i] == k) {
        num++;
      } else {
        break;
      }
    }
    // 右边查找
    for(let j = mid; j < length; j++) {
      if(data[j] == k) {
        num++;
      } else {
        break;
      }
    }
    num -= 2;
  }
  return num;
}


// 使用原生API进行
function GetNumberOfK(data, k){
    var count = 0;
    var idx = data.indexOf(k);
    while(data[idx]==k){
        count++;
        idx++;
    }
    return count;
}