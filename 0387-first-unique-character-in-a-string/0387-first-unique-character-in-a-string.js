/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let str = s.split('');
    let freq = {};
    let arr = [];

    for(let elem of str){
        freq[elem] = (freq[elem] || 0) + 1;
    }
    
    for(let ele in freq){
        if(freq[ele] === 1){
            arr.push(ele);
        }
    }

    for(let i=0;i<str.length;i++){
        if(arr.includes(str[i])) return i;
    }

    return -1;
  
};