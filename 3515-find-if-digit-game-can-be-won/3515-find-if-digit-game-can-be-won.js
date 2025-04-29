/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let sCount = 0
    let dCount = 0
    
    for(const num of nums){
        if(num>9){
            dCount+=num
        }else{
            sCount+=num
        }
    }
    console.log(dCount,sCount)
    if(sCount!==dCount){
        return true
    }else{
    return false
    }
};