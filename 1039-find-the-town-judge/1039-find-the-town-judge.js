/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n === 0) return 0;

    let inDegree = Array(n+1).fill(0);
    let outDegree = Array(n+1).fill(0);

    for(let [a,b] of trust){
        outDegree[a]++;
        inDegree[b]++;
    }

    for(let i=1;i<=n;i++){
        if(inDegree[i] === n-1 && outDegree[i] === 0) return i;
    }

    return -1;
};