/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const length = nums1.length + nums2.length;
  const firstNumber = Math.floor(length / 2);
  const isOdd = (length & 2 !== 0);

  let result = 0;
  for(let i = 0; i < length; i++) {
    let value;
    if(nums1.length && nums2.length) {
      if(nums1[0] > nums2[0]) {
        value = nums2.shift();
      } else {
        value = nums1.shift()
      }
    } else {
      if (nums1.length) {
        value = nums1.shift();
      } else {
        value = nums2.shift();
      }
    }
    // 处理找到的情况
    if (i === firstNumber || (i === firstNumber - 1 && !isOdd) ) {
      result += value;
    }
    // 提前终止
    if (i >= firstNumber + 1) {
      break;
    }
  }
  return isOdd ? result : result / 2;
};

console.log(findMedianSortedArrays([1,3] , [2,4]))