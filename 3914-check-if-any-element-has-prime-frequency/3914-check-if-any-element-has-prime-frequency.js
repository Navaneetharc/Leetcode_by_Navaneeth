/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {

    if(nums.length === 0) return false;
    let nCount = {};
    for(let num of nums){
        nCount[num] = (nCount[num] || 0) + 1;
    }
   
    const isPrime = (n) =>{
        if(n<2) return false;
        // if(n === 2) return true;
        // if(n%2 === 0) return false;
        for(let i=2;i*i<=n;i++){
            if(n%i === 0) return false;
        }
        return true;
    }

    for(let s in nCount){
        if(isPrime(nCount[s])) return true;
    }

    return false;
};