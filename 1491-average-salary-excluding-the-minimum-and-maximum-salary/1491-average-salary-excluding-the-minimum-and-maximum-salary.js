/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let maxSal = Math.max(...salary);
    let minSal = Math.min(...salary);
    let sum = 0;
    let count = 0;
    for(let i=0;i<salary.length;i++){
        if(salary[i] !== minSal && salary[i] !== maxSal){
            count++;
            sum += salary[i];
        }
    }
    return sum/count;
};