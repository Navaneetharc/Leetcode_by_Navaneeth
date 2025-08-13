var frequencySort = function(s) {

    let freqMap = {};
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    let arr = Object.entries(freqMap); 

    function quickSort(arr) {
        if (arr.length <= 1) return arr;
        let pivot = arr[0];
        let left = [];
        let right = [];
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i][1] > pivot[1]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    let sorted = quickSort(arr);
    let result = '';
    for (let [char, count] of sorted) {
        result += char.repeat(count);
    }
    return result;
};
