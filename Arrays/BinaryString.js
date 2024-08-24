/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let l=0;
    let r=0;
   for(let i=0;i<s.length;i++){
    if(i%2==0 && s[i]=='0'){
        l++;
    }
    else if(i%2==1 && s[i]=='1'){
        l++;
    }
    if(i%2==0 && s[i]=='1'){
        r++;
    }
    else if(i%2==1 && s[i]=='0'){
        r++;
    }
   }
    return Math.min(r,l);
    
};