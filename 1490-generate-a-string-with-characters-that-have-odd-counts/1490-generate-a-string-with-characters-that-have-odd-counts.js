/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let str = '';
    if(n%2 !== 0){
        let i = 0
        while(i<n){
            str += 'a'
            i++;
        }
    }else{
        let i = 0
        while(i<n-1){
            
            str += 'a'
            i++;
        }
        str += 'b'
    }
    return str
};