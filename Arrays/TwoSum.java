class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map=new HashMap<Integer,Integer>();
        for(int i=0;i<nums.length;i++){
            if(!map.containsKey(nums[i])){
                map.put(nums[i],i);
            }
                if(map.containsKey(target-nums[i]) && map.get(target-nums[i])!=i){
                    return new int[] {i,map.get(target-nums[i])};  
                }
            
        }
        return new int[] {0,0};
    }
}