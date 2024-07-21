/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = 0;
  let r = 0;
  while (r < nums.length) {
    count = 1;
    while (r + 1 < nums.length && nums[r] == nums[r + 1]) {
      count += 1;
      r += 1;
    }
    for (j = 0; j < Math.min(2, count); j++) {
      nums[l] = nums[r];
      l += 1;
    }
    r += 1;
  }
  return l;
};
