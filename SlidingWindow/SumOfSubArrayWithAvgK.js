/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let i=0;
    let count=0;
    let sum=[];
    let total=0;
    for(i=0;i<arr.length;i++){
      total+=arr[i];
      sum[i]=total;      
    }
    total=0;
    for(i=0;i<arr.length;i++){
      total+=arr[i];
      arr[i]=total;
      if(i>=k){
        arr[i]=total-sum[i-k];
      }
    }
    for(i=k-1;i<arr.length;i++){
      if((arr[i]/k)>=threshold){
        count++;
      }
    }
    return count;
};