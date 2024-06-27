/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let st1=[];
    let st2=[];
     for(i=0;i<s.length;i++){
         if(s.charAt(i)!=='#'){
            st1.push(s.charAt(i));
         }
         else{
             if(st1.length!==0){
                 st1.pop();
             }
         }
     }
     for(i=0;i<t.length;i++){
         if(t.charAt(i)!=='#'){
            st2.push(t.charAt(i));
         }
         else{
             if(st2.length!==0){
                 st2.pop();
             }
         }
     }
     return st1.join("")===st2.join("");
 };