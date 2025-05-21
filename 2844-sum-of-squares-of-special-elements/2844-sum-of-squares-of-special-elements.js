/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let arr = nums
    .filter((num,index)=>nums.length%(index+1)===0)
    .map(numb=> numb*numb)
    .reduce((acc,curr)=> acc+curr,0)

    return arr
};