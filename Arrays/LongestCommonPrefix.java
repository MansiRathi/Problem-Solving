class LongestCommonPrefix {
    public String longestCommonPrefix(String[] strs) {
        String longPrefix=strs[0];
        for(String s: strs){
            while(s.indexOf(longPrefix)!=0){
                longPrefix=longPrefix.substring(0,longPrefix.length()-1);
            }
        }
        return longPrefix;   
        
    }
}