/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left=1;
    let right=1;
    while(right<nums.length){
        if(nums[right-1]!==nums[right]){
              nums[left++]=nums[right];
        }
        right++;
    }
    return left;

};