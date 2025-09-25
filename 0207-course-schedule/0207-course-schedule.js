/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const indegree = Array(numCourses).fill(0);
    const graph = Array.from({length: numCourses}, () => []);
    
    for (let [a,b] of prerequisites){
        graph[b].push(a);
        indegree[a]++;
    }
    
    const queue = [];
    for (let i=0;i<numCourses;i++){
        if (indegree[i]===0) queue.push(i);
    }
    
    let count = 0;
    while (queue.length){
        let node = queue.shift();
        count++;
        for (let neigh of graph[node]){
            indegree[neigh]--;
            if (indegree[neigh] === 0) queue.push(neigh);
        }
    }
    
    return count === numCourses;
};