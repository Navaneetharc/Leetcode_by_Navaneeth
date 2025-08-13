/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length;
    for(let i=0;i<n-1;i++){
        let swapped = false;
        for(let j=0;j<n-1-i;j++){
            if(nums[j]<nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
   return (nums[0]-1) * (nums[1]-1)
};