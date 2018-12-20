
/*
    @使用快速排序来实现
    @算法思想：
            根据快速排序的思想首先将input根据 privot 切成两部分，然后判断left的部分的长度和k的大小，分别有三种关系
            * left长度大于k，那个我们需要的k个元素一定在left数组中
            * left长度小于k，那么我们需要的k个元素一定包含left数组中的项目，同时在right数组中还存在 k - left.length个项目
            * left长度等于k，那么我们需要的k个元素就是left数组
*/
function GetLeastNumbers_Solution(input, k)
{
    // write code here
    let result = [];
    while(true) {
      const privot = input[0];
      const [left, right] = splitWithK(input, privot);
      if(left.length === k) {
        result = result.concat(left);
        break;
      }
      if (left.length > k) {
          input = left;
          continue;
      }
      if (left.length < k) {
          result = result.concat(left);
          input = right;
          k = k - left.length;
          continue;
      }
    }
    return result.sort();
}

function splitWithK(input, value) {
    const left = [];
    const right = [];
    for (let item of input) {
      if(item <= value) {
        left.push(item);
      } else {
        right.push(item)
      }
    }
    return [left, right];
}

console.log(GetLeastNumbers_Solution([1,2,3,4,0], 2))

// 原生方法实现

function GetLeastNumbers_Solution(input, k) {
    if(input.length < k) return [];
    let result = input.sort();
    return result.splice(0,k)
}

/*
    @最大堆实现
    @算法思想：
            首先构造最大堆，创建k个元素，然后后面再推进来的元素首先和堆顶部进行对比，如果当前节点值大于堆顶，则直接抛弃
            如果当前节点消息堆顶元素，则替换堆顶元素进行调整，遍历完成之后，留在堆中则就是结果
*/

// 同时我们还可以采用其他的排序算法进行实现，比如冒泡排序，插入排序等
