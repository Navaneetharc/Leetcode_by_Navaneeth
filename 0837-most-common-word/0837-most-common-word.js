/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/);
    let counts = {}
    for(let word of words){
        if(word && !banned.includes(word)){
            counts[word] = (counts[word] || 0) + 1;
        }
    }
    let maxWord = '';
    let maxCount = 0;
    for(let item in counts){
        if(counts[item] > maxCount){
            maxCount = counts[item];
            maxWord = item;
        }
    }
    return maxWord;
};