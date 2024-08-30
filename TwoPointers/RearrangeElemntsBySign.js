/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let res=[];
    let pi=0;
    let ni=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res[pi]=nums[i];
            pi+=2;
        }
        else{
            res[ni]=nums[i];
            ni+=2;
        }
    }
    return res;
};