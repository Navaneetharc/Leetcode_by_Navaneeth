/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numsSet = [...new Set(nums)];
    numsSet.sort((a,b)=>b-a);
    return numsSet.length>=3 ? numsSet[2] : numsSet[0]
};