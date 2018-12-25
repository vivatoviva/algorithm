// 一种就是深度遍历，找出所有的组合结果，然后选择最小
// 找数学规律，进行求解

function PrintMinNumber(numbers)
{
  // 深度优先算法
  let sign = 0;
  let min = [...numbers];
  while (sign < numbers.length) {
    const arr = getOrder(min, sign);
    // 找出最小的结果，然后赋值给min
    let minStr = arr[0].join("");
    let minIndex = 0;
    arr.map((item, index) => {
      if (item.join("") < minStr) {
        minIndex = index;
        minStr = item.join("");
      }
    })
    min = arr[minIndex];
    sign++;
  }
  return min.join("");
}
function getOrder(numbers, sign) {
  // 返回一个全排列二维数组
  const order = numbers.splice(0, sign);
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const arr = [];
    for (let j = 0; j < numbers.length; j++) {
      if(i === j ) {
        arr.unshift(numbers[j])
      } else {
        arr.push(numbers[j])
      }
    }
    result.push([...order, ...arr]);
  }
  return result;
}


/*
  牛客网实现思路
  就是制定排序规则，然后按照规则进行排序，这样下载获得数组构成的数组最下
  * 若ab > ba 则 a > b，
  * 若ab < ba 则 a < b，
  * 若ab = ba 则 a = b；
*/
function PrintMinNumber1(numbers)
{
    numbers.sort(function(a,b){
        var s1=`${a}${b}`;
        var s2= `${b}${a}`;
        return s1-s2;
    })
    var result="";
    numbers.map(function(num){
        result=result.concat(num)
    })
    return result;
}
