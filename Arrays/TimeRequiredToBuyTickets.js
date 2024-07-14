/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let c=0;
    while(tickets[k]!=0){
        for(i=0;i<tickets.length;i++){
            if(tickets[i]!==0){
                c++;
                tickets[i]--;
            }
            if(tickets[k]===0){
                return c;
            }
        }
    }
    return c;
    
};