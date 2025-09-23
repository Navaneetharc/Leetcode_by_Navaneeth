/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let dum = [];
    for(let i=0;i<num.length;i++){
        let res = '';
        if(num[i] == num[i+1] && num[i] == num[i+2]){
            res += num[i]+num[i+1]+num[i+2];
            dum.push(res);
        }
    }
    if(dum.length === 0) return ""
    let large = -Infinity;
    for(let d of dum){
        if(d > large){
            large = d;
        }
    }
    console.log(dum);
    console.log(large);
    return large;
};