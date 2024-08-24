/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let gap=new Map();
    for(bricks of wall){
        let c=0;
        for(b of bricks.slice(0,bricks.length-1)){
            c+=b;
            if(!gap.has(c)){
               gap.set(c,1);
            }
            else{
                gap.set(c,gap.get(c)+1);
            }
        }
    }
    let max=0;
    for([key,value] of gap){
        max=Math.max(max,value);
    }
    return wall.length-max;
};