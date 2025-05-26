/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = -Infinity
    let min = Infinity
    let maxDiv = -Infinity
    let arr = []
    for(let i=0;i<nums.length;i++){
        if(max<nums[i]){
            max = nums[i]
        }
        if(min>nums[i]){
            min = nums[i]
        }
    }
    for(let i=0;i<max;i++){
        if(max%i===0 && min%i===0){
            arr.push(i)
        }
    }
    if(max===min){
        return max
    }
    console.log(arr)
    return arr[arr.length-1]
};