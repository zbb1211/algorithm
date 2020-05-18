class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined
  }
}
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = (a, b) => a === b;
  }
  push(element) {
    const node = new Node(element);
    let current = this.head;
    if (current == null) {
      this.head = node;
    } else {
      while(current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node;
    }
    return undefined
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current
      if (index === 0) {
        current = this.head;
        this.head = node;
        node.next = current;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count++;
      return true;
    }
    return false;
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index)
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  getHead() {
    return this.head;
  }
}
// 倒置一个单项链表
// Example:

// Input: 1->2->3->4->5->NULL Output: 5->4->3->2->1->NULL

var reverseList = head => {
  if (!head || !head.next) return head;
  let cur = head;
  let pre = null;
  while(cur) {
    let next = cur.next;
    next.next = pre;
    pre = cur;
    cur = next
  }
  return pre;
}