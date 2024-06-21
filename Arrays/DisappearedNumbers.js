/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res=[];
    let j=0;
    nums.sort((a,b)=>a-b);
    for(i=0;i<nums.length;i++){
        if(nums[i]!=i+1 && nums[i-1]!=nums[i]){
            res[j++]=i+1;
        }
    }
    return res;
};