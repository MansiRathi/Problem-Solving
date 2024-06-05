/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==1){
        return nums[0];
    }
    return Math.max(calMax(nums.slice(0,nums.length-1)),calMax(nums.slice(1,nums.length)));
};

var calMax=function(nums){
   let rob1=0;
   let rob2=0; 
     for(i=0;i<nums.length;i++){
        let max=Math.max(nums[i]+rob1,rob2);
        rob1=rob2;
        rob2=max;
    }
    return rob2;
}