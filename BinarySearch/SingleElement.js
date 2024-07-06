/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (
      (mid - 1 < 0 || nums[mid] != nums[mid - 1]) &&
      (mid + 1 == nums.length || nums[mid] != nums[mid + 1])
    ) {
      return nums[mid];
    }
    leftSize = nums[mid - 1] == nums[mid] ? mid - 1 : mid;
    if (leftSize % 2) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};
