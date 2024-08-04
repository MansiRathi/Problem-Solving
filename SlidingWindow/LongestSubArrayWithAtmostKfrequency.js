/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let counts=new Map();
    let left=0;
    let maxLength=0;
    for(let right=0;right<nums.length;right++){
        if(!counts.has(nums[right])){
            counts.set(nums[right],1);
        }
        else{
            counts.set(nums[right],counts.get(nums[right])+1);
        }
        while(counts.get(nums[right])>k){
            counts.set(nums[left],counts.get(nums[left])-1);
            left++;
        }
        maxLength=Math.max(maxLength,right-left+1);
    }
    return maxLength;
    
    
};