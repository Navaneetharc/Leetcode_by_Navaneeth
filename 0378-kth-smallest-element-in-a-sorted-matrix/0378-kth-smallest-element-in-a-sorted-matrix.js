/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr = [];
    for (let row of matrix) arr.push(...row);
    arr.sort((a,b) => a - b);
    return arr[k-1];
};