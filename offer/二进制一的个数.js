function NumberOf1(n)
{
    // write code here
    let num = 0;
    let fun = null;
    if (n < 0) {
      num = 1;
      n = -n;
      // 反码
      fun = (n) => n % 2 === 0; 
    } else {
      fun = () => n % 2 !== 0;
    }
    while (n) {
      if(fun(n)) num++;
      n = Math.floor(n/2)
    }
    return num;
}
console.log(NumberOf1(-1));
