/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  let st = [];
  let node = head;
  while (node != null) {
    if (st.length !== 0) {
      if (node.val > st[st.length - 1]) {
        while (node.val > st[st.length - 1]) {
          st.pop();
        }
        st.push(node.val);
      } else {
        st.push(node.val);
      }
    } else {
      st.push(node.val);
    }
    node = node.next;
  }
  let start = new ListNode();
  let res = start;
  st.map((n) => {
    res.next = new ListNode(n);
    res = res.next;
  });
  return start.next;
};
