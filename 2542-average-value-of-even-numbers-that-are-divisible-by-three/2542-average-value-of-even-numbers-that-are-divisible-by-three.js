/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let arr = []
    let count = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0 && nums[i]%3===0){
            arr.push(nums[i])
            count++
        }
    }

    if(arr.length === 0){
        return 0
    }

    let sum = arr.reduce((acc,curr)=> acc+curr ,0)
    let original = Math.floor(sum/count)
    return original
};