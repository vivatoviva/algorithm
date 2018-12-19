Function.prototype.myBind = function (oThis, ...params) {
    const that = this;
    if (typeof that !== 'function') {
        throw new Error(`${this} is not callable`);
    }
    function prototype() {};
    function bind (...args) {
        const isNew = this instanceof prototype;
        return that.apply(isNew ? this : oThis, [...params, ...args]);
    }
    // 引入中间函数，为了不影响new中的this
    prototype.prototype = that.prototype;
    bind.prototype = new prototype();
    return bind;
}
Function.prototype.softBind = function (oThis, ...params) {
    const that = this;
    if (typeof that !== 'function') {
        throw new Error(`${this} is not callable`);
    }
    function bind (...args) {
        const isNeedBind = !this || this === global;
        return that.apply(isNeedBind ? oThis : this, [...params, ...args]);
    }
    // 软绑定不需要中间函数
    bind.prototype = that.prototype;
    return bind;    
}
Function.prototype.create = function (...params) {
    const that = this;
    // 首先生成一个全新的对象
    const obj = new Object();
    // 进行原型链连接
    obj.__proto__ = that.prototype;
    // 将obj传入作为函数进行调用
    const funReturn = that.apply(obj, params);
    if (Object.prototype.toString.call(funReturn) === '[object Object]') {
        return funReturn;
    }
    return obj;
}

Function.prototype.myCall = function(context, ...args) {
    const that = this;
    context = context || window;
    if(typeof that !== 'function') {
        throw new Error('myCall 只支持函数调用')
    }
    context.fn = that;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

var obj1 = {
    
    method1() {
      console.log("method 1");
    }
  }
  
  var obj2 = {
    method2() {
     super.method1();
    }
  }
  
  Object.setPrototypeOf(obj2, obj1);
  obj2.method2(); 