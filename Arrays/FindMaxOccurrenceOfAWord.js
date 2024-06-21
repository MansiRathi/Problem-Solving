/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const str='balloon'
    const m=new Map();
    let ch=text.split("");
    ch.map((c)=>{
        m.set(c,m.get(c)?m.get(c)+1:1);
    });
    let ch1=str.split("");
    let count=Infinity;
    let flag=1;
    ch1.forEach((c2)=>{
        if(m.has(c2)){
            if(c2=='l' || c2=='o'){
                if(m.get(c2)!==1){
                count=Math.min(count,Math.floor(m.get(c2)/2));
                }
                else{
                    flag=0;
                }
            }
            else{
            count=Math.min(count,m.get(c2));
            }
        }
        else{
            flag=0;
        }
    });
    return flag==0?0:count;
    
};