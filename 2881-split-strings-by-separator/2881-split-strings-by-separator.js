/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const newArr = []
    for(const word of words){
        const  parts = word.split(separator)
        for(const part of parts){
            if(part!=''){
                newArr.push(part)
            }
        }
    }
    return newArr
};