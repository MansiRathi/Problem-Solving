/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let res = new ListNode();
  let node = res;
  let curr = head;
  let len = 0;
  while (curr != null) {
    len++;
    curr = curr.next;
  }
  n = len - n + 1;
  curr = head;
  while (curr != null && n !== 1) {
    node.next = curr;
    curr = curr.next;
    node = node.next;
    n--;
    if (curr != null && n == 1) {
      node.next = curr.next;
      curr = curr.next;
      n = 0;
    }
  }
  if (n == 1) {
    node.next = curr.next;
    curr = curr.next;
  }
  return res.next;
};
