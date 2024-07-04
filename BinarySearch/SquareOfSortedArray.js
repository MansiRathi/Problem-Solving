/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  nums.map((num, i) => {
    nums[i] = num * num;
  });
  nums.sort((a, b) => a - b);
  return nums;
};
