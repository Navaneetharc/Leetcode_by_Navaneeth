/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
    let newArr = []
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]+nums[j]===target && i!=j){
                arr.push(i,j)
            }
        }
    }
    for(let i=0;i<2;i++){
        newArr.push(arr[i])
    }
    return newArr
};