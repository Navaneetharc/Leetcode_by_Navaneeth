/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     for(let i=0;i<nums.length;i++){
        let isUnique = true;
        for(let j=0;j<nums.length;j++){
            if(nums[i]===nums[j] && i!==j){
                isUnique = false;
            }
        }
        if(isUnique){
        return nums[i]
    }
    }
};