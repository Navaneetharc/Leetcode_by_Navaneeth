/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    const ans = [];
    let p = 1;
    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        
        if (digit !== 0) {
            ans.push(digit * p);
        }
        p *= 10;
    }

    return ans.reverse();
};