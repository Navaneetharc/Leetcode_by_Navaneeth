/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    // let result = [];
    // for(let i=1;i<n;i++){
    //     if((i+(n-i)) === n){
    //         result = [i,n-i]
    //     }
    // }
    // console.log(result);
    // return result;
    let result = [];
    for(let i=1;i<n;i++){
        if((i+(n-i)) === n){
            if(!i.toString().split('').includes('0') && !(n-i).toString().split('').includes('0')){
                result = [i,n-i]
            }
        }
    }
    console.log(result);
    return result;
};