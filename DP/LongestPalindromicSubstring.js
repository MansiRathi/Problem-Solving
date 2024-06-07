/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res="";
    let palindromeLength=0;
    for(i=0;i<s.length;i++){
        let l=i;
        let r=i;
        while(l>=0 && r<s.length && s[l]==s[r]){
        if((r-l+1)>palindromeLength){
            res=s.slice(l,r+1);
            palindromeLength=res.length;
        }
        l-=1;
        r+=1;
    }
    }
    for(i=0;i<s.length;i++){
        let l=i;
        let r=i+1;
       while(l>=0 && r<s.length && s[l]==s[r]){
        if((r-l+1)>palindromeLength){
            res=s.slice(l,r+1);
            palindromeLength=res.length;
        }
        l-=1;
        r+=1;
    }
    }
    return res;
    
};

// var palindrome=function(l,r,s,palindromeLength){
//     let res="";
//     while(l>=0 && r<s.length && s[l]==s[r]){
//         if((r-l+1)>palindromeLength){
//             res=s.slice(l,r+1);
//             console.log('Res',res);
//             palindromeLength=res.length;
//         }
//         l-=1;
//         r+=1;
//     }
//     return res;
// }