/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map=new Map();
    let minIn=Number.MAX_VALUE;
    for(let i=0;i<s.length;i++){
    if(!map.has(s.charAt(i))){
        map.set(s.charAt(i),1);
    }
    else{
        map.set(s.charAt(i),map.get(s.charAt(i))+1);
    }
    }
    map.forEach((key,value)=>{
        console.log(key,value);
        if(key==1){
            minIn=Math.min(minIn,s.indexOf(value));
        }
    })
    return minIn==Number.MAX_VALUE?-1:minIn;
};