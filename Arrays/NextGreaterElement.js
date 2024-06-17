/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map=new Map();
    for(i=0;i<nums1.length;i++){
        map.set(nums1[i],i);
    }
    let res=[];
    for(i=0;i<nums2.length;i++){
        let j=i+1;
        if(map.has(nums2[i])){
            flag=0;
            while(j<nums2.length){
                if(nums2[j]>nums2[i]){
                  res[map.get(nums2[i])]=nums2[j];
                  flag=1;
                  break;
                }
                j++;
            }
            if(flag==0){
                res[map.get(nums2[i])]=-1;
            }
        }
    }
    return res;
    
};