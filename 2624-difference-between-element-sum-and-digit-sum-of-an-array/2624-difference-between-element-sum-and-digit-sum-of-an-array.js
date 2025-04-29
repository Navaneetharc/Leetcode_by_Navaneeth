/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
   let sumDigit=null;
   let sumElement=null;
  

   for(let i=0;i<nums.length;i++){
        sumElement = nums[i]+sumElement;
        let digit=nums[i].toString().split('').map(Number).reduce((sum,digit)=> sum+digit,0);
        sumDigit = digit + sumDigit;
   }
   return Math.abs(sumDigit-sumElement);
   
};