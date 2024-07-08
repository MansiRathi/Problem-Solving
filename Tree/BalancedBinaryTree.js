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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let res = true;
  const checkIsBalanced = (root) => {
    if (root == null) {
      return 0;
    }
    let left = checkIsBalanced(root.left);
    let right = checkIsBalanced(root.right);
    if (Math.abs(left - right) > 1) {
      res = false;
    }
    return 1 + Math.max(left, right);
  };
  checkIsBalanced(root);
  return res;
};
