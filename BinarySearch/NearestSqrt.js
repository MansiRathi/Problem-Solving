/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 0;
  let end = x;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (mid * mid == x) {
      return mid;
    } else if (mid * mid > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
};
