// 使用栈完成队列的操作
// push(x) -- 将X添加到队列的末尾
// pop() -- 移除队列的第一个元素
// peek() -- 获取队列的第一个元素
// empty() -- 判断队列是否是空

class MyQueue {
  constructor() {
    this.stack = [];
    this.helperStack = [];
  }
  push(element) {
    let cur = null;
    while((cur = this.stack.pop())) {
      this.helperStack.push(cur)
    }
    this.helperStack.push(element)
    while((cur = this.helperStack.pop())) {
      this.stack.push(cur)
    }
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1]
  }
  empty() {
    return this.stack.length === 0;
  }
}