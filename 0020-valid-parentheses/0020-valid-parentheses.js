/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    for(const char of s){
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char)
        }else{
            let last = stack.pop();
            if(char === ')' && last != '(' ||
                char === ']' && last != '[' ||
                char === '}' && last != '{'){
                    return false
                }
        }
    }
    return stack.length === 0
};