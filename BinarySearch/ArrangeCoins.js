/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1;
  let c = 0;
  while (c <= n) {
    c += i;
    i++;
  }
  return i - 2;
};
