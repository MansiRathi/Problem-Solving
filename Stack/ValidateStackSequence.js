/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let st=[];
    let j=0;let i=0;
    while(i<pushed.length && j<popped.length){
        if(st.length==0){
            if(pushed[i]===popped[j]){
                i++;
                j++;
            }
            else{
              st.push(pushed[i]);
              i++;  
            }
        }
        else if(st[st.length-1]===popped[j]){
            st.pop();
            j++;
        }
        else{
            st.push(pushed[i]);
            i++;
        }
    }
    while(st.length!==0 && j<popped.length){
        if(st[st.length-1]===popped[j]){
            st.pop();
            j++;
        }
        else{
            return false;
        }
    }
    if(st.length==0){
        return true;
    }
    return false;
};