/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let realCount = 0
    for(const word of words){
        let count = 0
        for(let i=0;i<word.length;i++){
            if(!allowed.includes(word[i])){
                count++
            }
        }
        if(count === 0){
            realCount++
        }
    }
    return realCount
};