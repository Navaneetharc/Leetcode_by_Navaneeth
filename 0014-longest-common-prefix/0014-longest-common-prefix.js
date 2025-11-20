/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    let comArr = [];
    let j = 0;

    let base = strs[0];

    for(let i=1;i<strs.length;i++){
        let com = ''
        j = 0;

        while(j < base.length && j < strs[i].length && base[j] === strs[i][j]){
            com += base[j];
            j++;
        }

        comArr.push(com);
    }

    if(comArr.length === 0) return '';
    let shortCom = comArr[0];

    for(let i=1;i<comArr.length;i++){
        if(shortCom.length > comArr[i].length){
            shortCom = comArr[i];
        }
    }

    return shortCom;
};