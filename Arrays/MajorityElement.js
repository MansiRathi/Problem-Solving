/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b);
    let num=nums[0];
    let maxC=0;
    let c=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            c++;
        }
        else{ 
           num=c>maxC?nums[i-1]:num;
           maxC=c>maxC?c:maxC;
           c=1;
        }
    }
    num=c>maxC?nums[nums.length-1]:num;
   return num;
};