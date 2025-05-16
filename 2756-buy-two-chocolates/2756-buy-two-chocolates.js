/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=> a-b)
    let bill = prices[0] + prices[1];
    return money-bill>=0 ? money-bill : money
};