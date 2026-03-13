/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {

    let arr = [];
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
            if(!arr.includes(nums[i])) arr.push(nums[i]);
        }
    }
    return arr;
};