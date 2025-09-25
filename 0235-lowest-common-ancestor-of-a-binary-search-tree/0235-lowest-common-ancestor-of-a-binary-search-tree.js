/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
  const pv = (p.val !== undefined) ? p.val : p.value;
  const qv = (q.val !== undefined) ? q.val : q.value;

  while (root) {
    const rv = (root.val !== undefined) ? root.val : root.value;
    if (pv < rv && qv < rv) {
      root = root.left;
    } else if (pv > rv && qv > rv) {
      root = root.right;
    } else {
      return root; 
    }
  }
};