/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {

    nums.sort((a, b) => a - b);
    let left=0;
    let right=k-1;
    let mini=Infinity;
    while(right<nums.length){
        mini=Math.min(mini,nums[right]-nums[left]);
        left+=1;
        right+=1;
    }
    return mini;
    
};