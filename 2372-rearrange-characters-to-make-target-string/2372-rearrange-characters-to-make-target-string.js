/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let sCount = {};
    let tCount = {};

    for(let ch of s){
        sCount[ch] = (sCount[ch] || 0) + 1;
    }
    for(let ch of target){
        tCount[ch] = (tCount[ch] || 0) + 1;
    }

    let res = Infinity;
    for(let ch of target){
        if(!sCount[ch]) return 0;
        res = Math.min(res,Math.floor(sCount[ch]/tCount[ch]));
    }
    return res;
};