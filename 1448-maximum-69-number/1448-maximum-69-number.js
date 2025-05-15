/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numStr = num.toString();
    let numArr = numStr.split('');

    for(let i=0;i<numArr.length;i++){
        if(numArr[i]==='6'){
            numArr[i]='9';
            break;
        }
    }

    return parseInt(numArr.join(''))

};