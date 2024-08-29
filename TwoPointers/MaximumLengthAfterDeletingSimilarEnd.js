/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let i=0;
    let j=s.length-1;
    let count=0;
    while(i<j && j<=s.length-1){
        if(s[i]==s[j]){
           while(s[i]==s[i+1]){
            i++;
           }
           while(s[j]==s[j-1]){
            j--;
           }
        }
        else{
            break;
        }
        if(i<j){
        i++;
        j--;
        }
        else{
            return 0;
        }
    }
    return j+1-i;
    
};