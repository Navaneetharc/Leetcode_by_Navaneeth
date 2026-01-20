/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vows = "AEIOUaeiou".split('');
    let word = s.split('')
    let incVows = s.split('').filter(items => vows.includes(items));
    for(let i=0;i<word.length;i++){
        if(vows.includes(word[i])){
            word[i] = incVows.pop();
        }
    }
    return word.join('');
};