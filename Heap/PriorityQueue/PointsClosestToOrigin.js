/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var maxPQ=new MaxPriorityQueue({priority:(val)=>val[0]});

    for(let point of points){
        let x=point[0];
        let y=point[1];
        let dist=x*x+y*y
        maxPQ.enqueue([dist,point]);
        if(maxPQ.size()>k){
            maxPQ.dequeue()
        }
    }
    let res=[]
    while(maxPQ.size()>0){
        res.push(maxPQ.dequeue().element[1]);
    }
    return res;
    
};