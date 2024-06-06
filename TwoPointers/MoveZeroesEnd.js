/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0;
    for(j=0;j<nums.length;j++){
        if(nums[j]!=0){
        if(nums[i]==0){
            nums[i++]=nums[j];
            nums[j]=0;
            }
        }
        else{
            if(nums[i]!=0){
                i=j;
            }
        }
       
    }
};