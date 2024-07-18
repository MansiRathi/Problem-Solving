/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);
  let map = new Map();
  let res = [];
  nums.map((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  for (i = 1; i <= nums.length; i++) {
    if (map.get(i) == 2) {
      res[0] = i;
    }
    if (!map.has(i)) {
      res[1] = i;
    }
  }
  return res;
};
