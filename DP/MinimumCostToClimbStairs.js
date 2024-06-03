/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    for(i=cost.length-2;i>=0;i--){
     if(i+2<cost.length){
     cost[i]=Math.min(cost[i]+cost[i+1],cost[i]+(i+2<cost.length?cost[i+2]:0));
     }
    }
    return Math.min(cost[0],cost[1]); 
};