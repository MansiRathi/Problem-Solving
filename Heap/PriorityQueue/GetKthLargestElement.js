/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap=new MinPriorityQueue();
    this.k=k;
    for(let num of nums){
        this.add(num);
    }
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.minHeap.size() <this.k){
        this.minHeap.enqueue(val)
    }
    else if(this.minHeap.front().element<val){
         this.minHeap.dequeue()
         this.minHeap.enqueue(val)
    }
    return this.minHeap.front().element; 
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */