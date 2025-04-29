/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let newArr = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!==0){
            newArr.push(nums[i])
        }else{
            newArr.unshift(nums[i])
        }
    }
    return newArr
};