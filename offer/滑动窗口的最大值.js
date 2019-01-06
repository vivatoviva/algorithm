// 给定一个数组和滑动窗口的大小，找出所有滑动窗口最大值

// 通过循环对相邻的两个元素进行求最大值，经过size次循环之后，得到最终结果

function maxInWindows(num, size)
{
    // write code here
    if (size <= 0) {
      return [];
    }
    for (let i = 1; i < size; i++) {
      const arr = [];
      for (let j = 0; j < num.length - 1; j++) {
        arr.push(Math.max(num[j], num[j + 1]));
      }
      num = arr;
    }
    return num;
}


// 优化操作，提高性能
const findMax = (num, startIndex, overIndex) => {
  const arr = num.slice(startIndex, overIndex + 1);
  const maxValue = Math.max(...arr);
  const maxIndex = arr.indexOf(maxValue);
  return { maxValue, maxIndex }
}

function maxInWindows(num, size) {
  let startIndex = 0; // 滑动窗口起始位置
  let nowMaxIndex; // 存放当前滑动窗口最大值下标
  let result = []; // 存放结果
  if (size < 1) return [];
  for (; startIndex < num.length - size + 1; startIndex++) {
    const overIndex = startIndex + size - 1; // 滑动窗口结束位置
    // 找出第一个最大值位置
    if (nowMaxIndex === undefined || nowMaxIndex < startIndex || num[nowMaxIndex] < num[overIndex]) {
      // 找出最大位置赋值
      const { maxValue, maxIndex } = findMax(num, startIndex, overIndex);
      result.push(maxValue);
      nowMaxIndex = maxIndex;
    } else {
      result.push(num[nowMaxIndex])
    }
  }
  return result;
}

console.log(maxInWindows([1,3,5,7,9,11,13,15], 4));

// 牛客网实现思路

/**
 * 题目：滑动窗口的最大值
 * 思路：滑动窗口应当是队列，但为了得到滑动窗口的最大值，队列序可以从两端删除元素，因此使用双端队列。
 *     原则：
 *     对新来的元素k，将其与双端队列中的元素相比较
 *     1）前面比k小的，直接移出队列（因为不再可能成为后面滑动窗口的最大值了!）,
 *     2）前面比k大的X，比较两者下标，判断X是否已不在窗口之内，不在了，直接移出队列
 *     队列的第一个元素是滑动窗口中的最大值
 */

 function maxInWindows(num, size) {
    const queue = [0]; // 双端队列
    for (let i = 1; i < num.length; i++) {
      
    }
 }

 // 最大堆方法

 /* //#endregion
    构建一个大小为滑动窗口大小的最大堆
    每次从堆中取出窗口中的最大值
    随着窗口向右边移动，需要将堆中不属于窗口的堆顶元素推出
 */
