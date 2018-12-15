const stack = [];
function push(node)
{
    // write code here
    return stack.push(node);
}
function pop()
{
    // write code here
    return stack.pop();
}
function top()
{
    // write code here
    return stack[stack.length - 1];
}
function min()
{
    // write code here
    return Math.min(...stack);
}
push(1);
push(2);
console.log(min());