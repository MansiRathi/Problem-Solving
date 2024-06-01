/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let st=[]
        for(i=0;i<s.length;i++){
           if(s[i]!='*'){
            st.push(s[i]);
           }
           else{
            if(st.length){
                st.pop();
            }
           }
        }
        
        return st.join("");
};