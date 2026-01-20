/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const og = s.toLowerCase().replace(/[^a-z0-9]/g , "");
    const reversed = og.split('').reverse().join('');
    console.log(og);
    console.log(reversed);
    return og === reversed;
};