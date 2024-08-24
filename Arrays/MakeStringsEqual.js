/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    if(words.length==1){
        return true;
    }
    let len=words.length;
    let map=new Map();
    for(let i=0;i<words.length;i++){
        let word=words[i];
        for(let j=0;j<word.length;j++){
            let c=word.charAt(j);
            if(!map.has(c)){
                map.set(c,1);
            }
            else{
                map.set(c,(map.get(c)+1));
            }
        }
    }
    for([key,value] of map){
       if(value%len!=0){
            return false;
        }
    }
    return true; 
};