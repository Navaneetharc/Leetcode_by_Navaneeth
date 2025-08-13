/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let n = nums.length;
    for(let i=0;i<n-1;i++){
        let minIndex = i;
        for(let j=i+1;j<n;j++){
            if(nums[j]<nums[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }
    let sum = 0;
    for(let k=0;k<nums.length;k+=2){
        sum += nums[k];
    }
    return sum;
};