/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map1=new Map();
    let map2=new Map();
    let words=s.split(" ");
    if(words.length!==pattern.split("").length){
        return false;
    }
    for(i=0;i<words.length;i++){
        if((map1.has(pattern.charAt(i)) && map1.get(pattern.charAt(i))!=words[i]) || (map2.has(words[i]) && map2.get(words[i])!=pattern.charAt(i) )){
                return false;
        }
        else{
            map1.set(pattern.charAt(i),words[i]);
            map2.set(words[i],pattern.charAt(i));
        }
        
    }
    return true;
    
};