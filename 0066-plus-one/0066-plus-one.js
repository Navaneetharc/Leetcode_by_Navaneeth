/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join(''))
    num=++num
    let result = num.toString().split('').map(Number)
    console.log(result)
    return result
};