/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [0]

    for(let i=1;i<=n;i++){
        arr[i] = arr[Math.floor(i/2)] + (i%2)
    }

    return arr
    
};