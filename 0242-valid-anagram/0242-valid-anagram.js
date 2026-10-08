/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let S = s.split('').sort().join('');
    let T = t.split('').sort().join('');
    
    console.log(S);
    console.log(T);
    return S === T;
};