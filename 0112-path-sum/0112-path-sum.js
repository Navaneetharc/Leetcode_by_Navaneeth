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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
  const stack = [[root, targetSum - root.val]];
  while (stack.length) {
    const [node, rem] = stack.pop();
    if (!node.left && !node.right && rem === 0) return true;
    if (node.right) stack.push([node.right, rem - node.right.val]);
    if (node.left)  stack.push([node.left,  rem - node.left.val]);
  }
  return false;
};