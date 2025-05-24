/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let arr = []

    for(let i=0;i<s.length;i+=2){
        if(s[i]==='(' && s[i+1] === ')'){
            arr.push(1)
        }else if(s[i]==='[' && s[i+1] === ']'){
            arr.push(1)
        }else if(s[i]==='{' && s[i+1] === '}'){
            arr.push(1)
        }else{
            arr.push(0)
        }        
    }

    if(!arr.includes(0)){
        return true
    }else{
        return true
    }
    
};