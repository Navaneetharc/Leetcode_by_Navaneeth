/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let t = s.replace(/[^a-z0-9A-Z]/g,'').toLowerCase();
    return t.split('').reverse().join('') === t;
};