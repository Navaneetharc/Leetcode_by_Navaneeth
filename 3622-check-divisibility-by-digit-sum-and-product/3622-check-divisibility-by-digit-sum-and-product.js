/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let digi = n.toString().split('');
    let digit = digi.map(Number);
    let sum1 = 0;
    let product = 1;
    let i = 0;
    while(i < digit.length){
        sum1 += digit[i];
        product *=digit[i];
        i++;
    }
    return n % (sum1 + product) === 0;
};