// 根据逻辑规律实现
function IsPopOrder(pushV, popV)
{
  // write code here
  const firstPop = popV[0];
  const firstIndex = pushV.findIndex(value => value === firstPop);
  if (firstIndex === -1) return false;
  const pushOrder = pushV.splice(0, firstIndex);
  
  let item = pushOrder[pushOrder.length  - 1];
  for(let i = 1; i < popV.length; i++) {
    if(popV[i] === item) {
      pushOrder.pop();
      item = pushOrder[pushOrder.length - 1];
    }
  }

  if(pushOrder.length === 0) return true;
  return false;
}
console.log(IsPopOrder([1], [2]))

// 按照操作规律实现
function IsPopOrder(pushV, popV) {
  var stack = [];
  var idx = 0;
  for (var i = 0; i < pushV.length; i++) {
    stack.push(pushV[i]);
    while (stack.length && stack[stack.length - 1] == popV[idx]) {
      stack.pop();
      idx++;
    }
  }
  return stack.length == 0;
}
console.log(IsPopOrder([1], [2]))
