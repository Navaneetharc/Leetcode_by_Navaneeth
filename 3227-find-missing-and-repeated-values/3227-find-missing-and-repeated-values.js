/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let gridy = grid.flat();
    let seen = new Set();
    let result = [];

    for(const num of gridy){
        if(!seen.has(num)){
            seen.add(num);
        }else{
            result.push(num);
        }
    }

    for(let i=1;i<=gridy.length;i++){
        if(!seen.has(i)){
            result.push(i);
            break;
        }
    }

    return result;
    
};