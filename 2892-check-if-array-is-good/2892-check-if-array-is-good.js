/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let sNums = nums.sort((a,b)=>a-b);
    
    if(sNums[sNums.length - 1] !== sNums.length - 1) return false;
    for(let i=0;i<sNums.length - 1;i++){
        if(sNums[i] !==i+1 && !(i === sNums.length-2 && sNums[i] === sNums.length - 1)){
            return false;
        }
    }
    return true;
};