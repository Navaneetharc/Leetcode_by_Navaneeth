/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let abCount = 0;
    let lCount = 0;
    
    for(let att of s){
        if(att === 'A') abCount++;
        
        if(att === 'L'){
            lCount++;
            if(lCount >= 3) return false;
        }else{
            lCount = 0;
        }
         console.log(abCount);
        if(abCount >= 2) return false;
       
    }
    
    return true;
};