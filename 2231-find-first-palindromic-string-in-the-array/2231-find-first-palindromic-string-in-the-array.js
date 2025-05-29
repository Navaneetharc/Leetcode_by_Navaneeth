/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let pal = words.filter(word=> word === word.split('').reverse().join(''))
    if(pal.length === 0){
        return ""
    }
    return pal[0]
};