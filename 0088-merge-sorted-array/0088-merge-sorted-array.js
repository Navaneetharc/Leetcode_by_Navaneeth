/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i=0;i<n;i++){
        nums1[m+i] = nums2[i];
    }
    for(let i=1;i<nums1.length;i++){
        let key = nums1[i];
        let j = i-1;
        while(j>=0 && nums1[j]>key){
            nums1[j+1] = nums1[j];
            j = j-1;
        }
        nums1[j+1] = key;
    }
};