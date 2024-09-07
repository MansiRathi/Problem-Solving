/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let maxPriorityQueue=new MaxPriorityQueue();
    for(stone of stones){
       maxPriorityQueue.enqueue(stone);
    }
    while(maxPriorityQueue.size()>1){
       let f=maxPriorityQueue.dequeue().element;
       let s=maxPriorityQueue.dequeue().element;
       maxPriorityQueue.enqueue(f-s);
    }

    return maxPriorityQueue.front().element;

   
};