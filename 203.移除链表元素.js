// 删除链表中等于给定值val的所有节点
// 示例:

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

var removeElement = (head, val) => {
  let newHead = new ListNode(null);
  newHead.next = head;
  let prev = newHead;
  let curr = head;
  while(curr) {
    if (curr.val === val) {
      let next = curr.next;
      prev.next = next.next;
      curr = next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
}
