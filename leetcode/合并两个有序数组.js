/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * @description {这里使用js直接可以得到解，但是参考静态语言的数组大小限制，所以使用移动方式实现}
 * @input {
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * }
 * @output {
 * [1,2,2,3,5,6]
 * }
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Index = m - 1;
    let nums2Index = n - 1;

    for (let i = nums1.length - 1; i >= 0; i--) {
      if (nums1Index >= 0 && nums2Index >= 0) {
        if (nums1[nums1Index] > nums2[nums2Index]) {
          nums1[i] = nums1[nums1Index];
          nums1Index -= 1;
        } else {
          nums1[i] = nums2[nums2Index];
          nums2Index -= 1;
        }
      } else {
        if (nums1Index >= 0) {
          nums1[i] = nums1[nums1Index];
          nums1Index -= 1;
        } else {
          nums1[i] = nums2[nums2Index];
          nums2Index -= 1;
        }
      }
    }
    return nums1;
};
console.log(merge([1,2,3,0,0,0], 3,[2,5,6], 3));
