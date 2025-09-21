/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    if(nums.length <= 0) return 0;
    let op = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[i] <= nums[i-1]){
            let diffs = nums[i-1] - nums[i] + 1;
            nums[i] += diffs;
            op += diffs;
        }
    }
    return op;
};