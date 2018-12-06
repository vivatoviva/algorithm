const firstlist = [];
const secondlist = [];

function push(node)
{
    // write code here
    while(firstlist.length) {
        secondlist.push(firstlist.shift());
    }
    secondlist.push(node);
    while(secondlist.length) {
        firstlist.push(secondlist.shift())
    }
}
function pop()
{
    // write code here
    return firstlist.shift();
}
push(1);
push(2);
console.log(pop());