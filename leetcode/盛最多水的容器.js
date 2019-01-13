/**
 * @param {number[]} height
 * @return {number}
 * @description {
 *  结果： result = (j - i) * minHeight
 *  也是使用两个指针进行扫，i，j
 *  因为每次i，j变动都会导致（j - i）变小
 *  所以如果我们要保证下一组值可能大于上一次找到的值，则必须保证minHeight变大
 *  所以实现算法如下
 * }
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let minHeight = Math.min(height[i], height[j]);
    let result = minHeight * (j - i);

    while(i < j) {
      if (height[i] < height[j]) {
        while(++i < j && height[i] < minHeight){};
      } else {
        while(i < --j && height[j] < minHeight) {};
      }
      minHeight = Math.min(height[i], height[j]);
      const area = minHeight * (j - i);

      if (i < j && area > result) {
        result = area;
      }
    }
    return result;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))