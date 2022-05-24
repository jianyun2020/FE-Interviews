/**
 * @description Two stacks - one queue
 * @author
 */

/**
 * 用两个栈实现队列
 */
export class MyQueue {
  // 用数组表示栈
  private stack1: number[] = [];
  private stack2: number[] = [];

  // 入队
  add(n: number) {
    this.stack1.push(n)
  }

  // 出队
  delete(): number | null {
    let res;
    const stack1 = this.stack1;
    const stack2 = this.stack2;

    // 将 stack1 中所有元素移动到 stack2中
    while(stack1.length) {
      const n = stack1.pop();
      if (n != null) {
        stack2.push(n);
      }
    }

    // stack2 pop
    res = stack2.pop();

    // 将 stack2 中所有元素还给 stack1
    while(stack2.length) {
      const n = stack2.pop();
      if (n != null) {
        stack1.push(n);
      }
    }

    return res || null;
  }

  get length(): number {
    return this.stack1.length;
  }

}

// 功能测试
// const q = new MyQueue();
// q.add(100);
// q.add(200);
// q.add(300);
// console.log(q.length); // 3
// console.log(q.delete()); // 100
// console.log(q.length); // 2