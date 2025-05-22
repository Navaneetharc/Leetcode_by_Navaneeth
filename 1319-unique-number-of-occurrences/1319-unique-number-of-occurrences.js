/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count = {}

    for(const num of arr){
        if(count[num]){
            count[num]++;
        }else{
            count[num] = 1
        }
    }
    let values = Object.values(count)
    let unique = new Set(values)

    return values.length === unique.size
};