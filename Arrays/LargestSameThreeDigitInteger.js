/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let count=1;
    let max=-1;
    let i=0;
    for(i=0;i<num.length-1;i++){
       if(num.charAt(i)===num.charAt(i+1)){
        count++;
       }
       else{
        if(count>=3){
        max=Math.max(parseInt(num.charAt(i-1)),max);
        }
        count=1;
       }
    }
    if(count>=3){
        max=Math.max(parseInt(num.charAt(i)),max);
    }
    return max==-1?"":(""+max).repeat(3);
};