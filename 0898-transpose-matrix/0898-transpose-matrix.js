/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];
    for(let i=0;i<cols;i++){
        result[i] = [];
        for(let j=0;j<rows;j++){
            result[i][j] = matrix[j][i];
        }
    }
    return result
};