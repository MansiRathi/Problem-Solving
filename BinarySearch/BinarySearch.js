/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
};
