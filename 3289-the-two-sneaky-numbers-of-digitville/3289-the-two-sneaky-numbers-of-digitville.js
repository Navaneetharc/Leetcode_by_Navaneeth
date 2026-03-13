/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        let count = 0;
        for(let j=0;j<nums.length;j++){
            if(nums[i] === nums[j] && i!==j){
                count++;
            }
        }
        console.log(count)
        if(count > 0){
            arr.push(nums[i]);
        }
    }

    let arr2 = [];
    let arr3 = []
    
    for(let i=0;i<arr.length;i++){
        if(!arr2.includes(arr[i])){
            arr2.push(arr[i]);
            arr3.push(arr[i]);
        }
    }

    return arr3
};