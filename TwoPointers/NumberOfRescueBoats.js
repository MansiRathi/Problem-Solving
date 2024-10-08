/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let count=0;
    let i=0;
    let j=people.length-1;
    people.sort((a,b)=>a-b);
    while(i<=j && j<people.length){
        if(people[i]+people[j]<=limit){
         count++;
          i++;
          j--;
        }
        else{
            count++;
            j--;
        }
    }
    return count;
        
    };