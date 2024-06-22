/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map=new Map();
    for(i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1);
        }
    }
    let count=0;
    map.forEach((values,keys)=>{
        count+=calComb(values);
    })
    return count;

};

var calComb=function(value){
    return (value*(value-1))/2;
}