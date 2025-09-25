/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    const map = new Map();
    
    const dfs = (n) => {
        if (map.has(n)) return map.get(n);
        let copy = new Node(n.val);
        map.set(n, copy);
        for (let neighbor of n.neighbors){
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    };
    
    return dfs(node);
    
};