/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let max = nums[0];
  let i;
  for (i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else {
      return i - 1;
    }
  }
  return i - 1;
};
