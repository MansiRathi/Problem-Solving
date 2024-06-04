/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length<=1){
     return nums[0]||0;
    }
    let max=Math.max(nums[0],nums[1]);
    for(i=1;i<nums.length;i++){
     nums[i]=Math.max(nums[i-1],nums[i]+((i-2)>=0?nums[i-2]:0));
     max=Math.max(max,nums[i]);
    }
    return max;
 };