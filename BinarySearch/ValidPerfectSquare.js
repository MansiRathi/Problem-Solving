/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let n = Math.floor(Math.sqrt(num));
  return n * n == num;
};
