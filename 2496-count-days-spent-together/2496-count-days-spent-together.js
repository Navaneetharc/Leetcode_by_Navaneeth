/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let start = arriveAlice > arriveBob ? arriveAlice : arriveBob;
    let end = leaveAlice < leaveBob ? leaveAlice : leaveBob;

    if(start > end) return 0;
    
    let dateToNum = date =>{
        const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
        let [m,d] = date.split('-').map(Number);
        let day = 0;
        for(let i=0;i<m-1;i++){
            day += daysInMonth[i];
        }
        day += d;
        return day;
    }

    return dateToNum(end) - dateToNum(start) + 1;
};