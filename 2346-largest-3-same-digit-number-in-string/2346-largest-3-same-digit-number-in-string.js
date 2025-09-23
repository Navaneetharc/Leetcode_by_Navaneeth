/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let vals = ['999','888','777','666','555','444','333','222','111','000'];
    for(let val of vals){
        if(num.includes(val)){
            return val;
        }
    }
    return '';
};