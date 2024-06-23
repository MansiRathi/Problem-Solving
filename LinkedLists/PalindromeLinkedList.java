/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
  
    ListNode prev=null;
    ListNode p=head;
    ListNode q=head;
    ListNode t=head;
    int n=0;
    while(t!=null){
        n++;
        t=t.next;
    }
    System.out.println(n);
    while(q!=null && q.next!=null){
        p=p.next;
        q=q.next.next;
    }
    if(n%2!=0){
        p=p.next;
    }
    ListNode secondHalf=p;
    while(secondHalf!=null){
        ListNode temp=secondHalf.next;
        secondHalf.next=prev;
        prev=secondHalf;
        secondHalf=temp;
    }
    while(head!=null && prev!=null){
        System.out.println(head.val+" "+prev.val);
        if(head.val!=prev.val){
            return false;
        }
        head=head.next;
        prev=prev.next;
    }
    return true;
        
    }
}