/**
 * @param {string} s
 * @return {boolean}
 * @description {
 *  使用堆栈的性质来保存每一个括号
 * }
 */
var isValid = function(s) {
    const stringStack = [];
    for(let i = 0, len = s.length; i < len; i++) {
      const currentString = s[i];
      // 处理第一个字符
      if (!stringStack.length) {
        stringStack.push(currentString);
        continue;
      }
      const lastStr = stringStack[stringStack.length - 1];
      switch(currentString) {
        case ']' : {
          if (lastStr === '[') {
            stringStack.pop();
            continue;
          }
        }; break;
        case '}' : {
          if (lastStr === '{') {
            stringStack.pop();
            continue;
          }
        }; break;
        case ')' : {
          if (lastStr === '(') {
            stringStack.pop();
            continue;
          }
        }; break;
      }
      stringStack.push(currentString);
    }
    return !stringStack.length;
};