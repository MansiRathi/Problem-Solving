/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let st = [];
  for (i = 0; i < s.length; i++) {
    if (s.charAt(i) !== "*") {
      st.push(s.charAt(i));
    } else {
      if (st.length !== 0) {
        st.pop();
      }
    }
  }
  return st.join("");
};
