/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0
    let indexes = {
        type:0,
        color:1,
        name:2
    }
    for(const item of items){
        if(item[indexes[ruleKey]]===ruleValue){
            count++
        }
    }
    return count
};