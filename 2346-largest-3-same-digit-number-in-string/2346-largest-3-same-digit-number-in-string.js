/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = ""
    for(let i=0;i<num.length;i++){
        if(num[i]==num[i+1] && num[i+1]==num[i+2]){
            let candidate = num.substring(i,i+3)
            if(candidate>max){
                max = candidate
            }
        }
    }
    return max
};