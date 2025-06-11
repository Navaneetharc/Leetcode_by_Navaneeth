/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n = nums.length/2
    for(let i=0;i<nums.length;i++){
        let count = 1
        for(let j=0;j<nums.length;j++){
            if(nums[i] === nums[j] && i!=j){
                count++
            }
        }
        if(count === n){
            return nums[i]
        }
    }
};