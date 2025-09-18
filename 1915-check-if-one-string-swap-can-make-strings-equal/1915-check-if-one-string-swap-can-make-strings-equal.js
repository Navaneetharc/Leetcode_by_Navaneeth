/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;
    if(s1.length !== s2.length) return false;
    
    let diff = [];
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]) diff.push(i);
        if(diff.length > 2) return false;
    }
    if(diff.length === 0) return true;

    if(diff.length === 2){
        let [i,j] = diff;
        return s1[i] === s2[j] && s1[j] === s2[i];
    }
    return false;
};