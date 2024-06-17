/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res=""
    let words=s.split(" ");
    words.forEach((word)=>{
        let w=word.split("");
        res+=w.reverse().join("")+" ";
    });
    return res.trimRight();
    
};