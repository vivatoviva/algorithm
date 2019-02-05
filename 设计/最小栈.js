Array.prototype.last = function (params) {
  const length = this.length;
  if (length) {
    return this[length - 1];
  }
  return false;
}
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []; // 保存正常顺序的栈
    this.minStack = []; // 保存最小数据的栈
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    const minValue = this.minStack.last();
    if (minValue === false) {
      this.minStack.push(x);
    } else {
      if (x <= minValue) {
        this.minStack.push(x);
      }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popValue = !this.stack.length ? his.stack.pop() : '';
    if (popValue === this.minStack.last()) {
      this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.last();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack.last();
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 const stack = new MinStack();
 stack.push(0);
 stack.push(2);
 stack.push(8);
 console.log(stack.top())
 console.log(stack.getMin())