/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let result = [];
    for(let num of nums){
        let sum = 0;
        let items = num.toString().split('').map(Number);
        for(let item of items){
            sum += item;
        }
        result.push(sum);
    }
    let og = result.sort((a,b) => a-b);
    return og[0]
};