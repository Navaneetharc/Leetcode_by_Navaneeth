/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vows = 'AEIOUaeiou';
    let queue = [];
    for(let i=0;i<s.length;i++){
        if(vows.includes(s[i])){
           queue.push(s[i]);
        }       
    }
    let t = s.split('');
    for(let j=0;j<t.length;j++){
        if(vows.includes(t[j])){
            t[j] = queue.pop();
        }
    }
    return t.join('');
};