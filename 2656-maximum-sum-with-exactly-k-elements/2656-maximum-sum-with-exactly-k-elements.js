/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let maxEl = Math.max(...nums);
    let sum = 0;
    while(k>=1){
        sum += maxEl;
        maxEl += 1;
        k--;
    }
    return sum;
};