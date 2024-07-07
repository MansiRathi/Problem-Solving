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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let preorderTree = [];
  const preparePreorderTree = function (node) {
    if (node == null) {
      return;
    }
    preorderTree.push(node.val);
    preparePreorderTree(node.left);
    preparePreorderTree(node.right);
  };
  preparePreorderTree(root);
  return preorderTree;
};
