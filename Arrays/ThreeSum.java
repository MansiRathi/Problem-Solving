class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res =new ArrayList<List<Integer>>();
        Arrays.sort(nums);
        for(int i=0;i<=nums.length-3;i++){
            int a=nums[i];
            if(i>0 && a==nums[i-1]){
            continue;
            }
            int l=i+1;
            int r=nums.length-1;
            while(l<r){
                int sum=a+nums[l]+nums[r];
                if(sum>0){
                    r-=1;
                }
                else if(sum<0){
                    l+=1;
                }
                else{
                    List<Integer> li=new ArrayList<Integer>();
                    li.add(a);
                    li.add(nums[l]);
                    li.add(nums[r]);
                    res.add(li);
                    l+=1;
                    while(nums[l]==nums[l-1] && l<r){
                        l+=1;
                    }  
                }
            }
        }
        return res;
    }
}