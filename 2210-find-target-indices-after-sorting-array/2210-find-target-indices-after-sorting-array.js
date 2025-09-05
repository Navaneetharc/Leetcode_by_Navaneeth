/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let emptyArr=[]
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            emptyArr.push(i);
        }
    }
    return emptyArr
};