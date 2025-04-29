/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    
    let freq = nums.reduce((acc,num)=>{
        acc[num] = (acc[num] || 0) + 1
        return acc
    },{})
   
   let dup = Object.keys(freq).filter((numb)=>freq[numb]>1).map(Number)

   return dup
    
};