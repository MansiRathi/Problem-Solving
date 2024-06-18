/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft=0;
    let totalSum=0;
    nums.forEach((num)=>{
        totalSum+=num;
    });
    for(let i=0;i<nums.length;i++){
        if(i>0){
            sumLeft+=nums[i-1];
        }
        if(sumLeft===(totalSum-sumLeft-nums[i])){
            return i;
        }
    }
    return -1;
};