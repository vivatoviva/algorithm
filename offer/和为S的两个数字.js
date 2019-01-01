// 广度优先
function FindNumbersWithSum(array, sum)
{
    // write code here
    let result = [];
    let maxResult = 100000000000;
    for(let i = 0; i < array.length-1; i++) {
      for(let j = i+1; j < array.length; j++) {
        const isOK = (array[i] + array[j] == sum) && (array[i] * array[j] < maxResult);
        if (isOK){
          result = [ array[i], array[j]];
          maxResult = array[i] * array[j];
        }
      }
    }
    return result;
}

// [3, 4, 6, 1, 8, 9, 2] 10
// [[ 4, 6 ], [1, 9], [2, 8]]

// 使用滑动窗口解决

/*
    使用这个方法的前提就是array要是单调递增，并且两个数组之间差值为1
*/


function FindNumbersWithSum(array, sum) {
  let plow = 0;
  let pheight = 1;
  let result = [];
  let maxResult = 1000000;

  while(pheight > plow) {
    const value = array[plow] + array[pheight];
    if (value == sum) {
      // 遇到解
      let maxValue = array[plow] + array[pheight];
      if (maxValue < maxResult) {
        maxResult = maxValue;
        result = [array[plow], array[pheight]];
      }
      plow++;
      pheight--;
    } else {
      // 没有遇见解
      if (pheight < array.length - 1) {
        pheight++;
      } else {
        plow++;
      }
    }
  }
  return result;
}


// 根据数学规律来解

/*
    数列满足递归数列，设头部和尾部两个指针 i, j
    如果sum == array[i] + array[j]，则求得要的解，因为两个数字离的越远乘积越小
    如果sum < array[i] + array[j],则 i++；
    如果sum > array[i] + array[j] ,则j--；
*/

function FindNumbersWithSum(array, sum) {
    let i = 0; // 指向头部
    let j = array.length - 1; // 指向尾部
    let result = [];
    while(i < j) {
      const value = array[i] + array[j];
      if (value === sum) {
        result = [array[i], array[j]];
        break;
      } else if (value < sum) {
        i++;
      } else {
        j--;
      }    
    }
    return result;
}


// 牛客网上性能排名最高的函数

function FindNumbersWithSum(array, sum) {
  var idx,
    result = [],
    min;
  for (var i = 0; i<array.length-1&&array[i]<sum/2; i++) {
    idx = array.indexOf(sum - array[i], i + 1);
    if (idx != -1) {
        return [array[i], array[idx]];
    }
  }
  return result;
}


// 性能测试
var date = +new Date();
for(let i = 0; i < 1000; i++) {
  FindNumbersWithSum([1,2,4,7,11,15], 15);
}
console.log(+(new Date()) - date)