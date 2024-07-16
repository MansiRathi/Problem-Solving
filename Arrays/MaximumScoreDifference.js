/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  for (i = 0; i < s.length - 1; i++) {
    let str1 = s.substring(0, i + 1);
    let str2 = s.substring(i + 1, s.length);
    let zeroes = str1.split("0").length - 1;
    let ones = str2.split("1").length - 1;
    max = Math.max(max, zeroes + ones);
  }
  return max;
};
