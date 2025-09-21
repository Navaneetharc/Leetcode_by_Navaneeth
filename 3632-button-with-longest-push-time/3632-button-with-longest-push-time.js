/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
    let maxTime = events[0][1];
    let result = events[0][0];

    for(let i=1;i<events.length;i++){
        let diffs = events[i][1] - events[i-1][1];
        if(diffs > maxTime){
            maxTime = diffs;
            result = events[i][0];
        }else if(maxTime === diffs && events[i][0] < result){
            result = events[i][0];
        }
    }

    return result;
};