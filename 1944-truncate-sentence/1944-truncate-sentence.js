/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let count = 0
    let arr = []
    for(let i=0;i<s.length;i++){
        if(s[i]===" "){
            count++
        }
        if(count===k){
            break
        }
        arr.push(s[i])
    }
    return arr.join('')
};