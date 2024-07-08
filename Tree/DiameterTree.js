/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let count = 0;
  const calculateDiameter = (root) => {
    if (root === null) {
      return 0;
    }
    let left = root.left ? calculateDiameter(root.left) : 0;
    let right = root.right ? calculateDiameter(root.right) : 0;
    count = Math.max(count, left + right + 1);
    return Math.max(left, right) + 1;
  };
  calculateDiameter(root);
  return count - 1;
};
