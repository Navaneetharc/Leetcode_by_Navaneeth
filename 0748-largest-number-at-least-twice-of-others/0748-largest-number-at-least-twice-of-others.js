/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums)
    let indexMax = nums.indexOf(max)

    for(let i=0;i<nums.length;i++){
        if(i!==indexMax && max<nums[i]*2){
            return -1
        }
    }
    return indexMax
};