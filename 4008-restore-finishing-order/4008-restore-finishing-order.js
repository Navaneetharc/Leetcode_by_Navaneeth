/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let arr = [];
    for(let i=0;i<order.length;i++){
        if(friends.includes(order[i])){
            arr.push(order[i]);
        }
    }
    return arr;
};