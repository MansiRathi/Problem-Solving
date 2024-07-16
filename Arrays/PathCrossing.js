/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0;
  let y = 0;
  let vp = new Set();
  vp.add("0,0");
  for (i = 0; i < path.length; i++) {
    let c = path.charAt(i);
    if (c == "N") y++;
    else if (c == "E") x++;
    else if (c == "S") y--;
    else x--;
    let point = `${x},${y}`;
    if (vp.has(point)) {
      return true;
    } else {
      vp.add(point);
    }
  }
  return false;
};
