/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let evenSum = 0;
    let oddSum = 0;
    let numb = num.split('').map(Number);
    for(let i=0;i<numb.length;i++){
        if(i%2!==0){
            oddSum = numb[i] + oddSum;
        }else{
            evenSum = numb[i] + evenSum;
        }
    }
    return oddSum === evenSum;
};