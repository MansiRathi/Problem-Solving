/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
     List<ListNode> list=new ArrayList<>();
     ListNode temp=headA;
     ListNode temp2=headB;
     while(temp!=null){
        list.add(temp);
        temp=temp.next;
     }
     while(temp2!=null){
        if(list.contains(temp2)){
           return temp2; 
        }
        else{
            temp2=temp2.next;
        }
     }
     return null;
        
    }
}