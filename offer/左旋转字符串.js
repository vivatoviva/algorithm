function LeftRotateString(str, n)
{
    // write code here
    // 判断str参数
    if (str==null || str.length === 0){
      return "";
    }
    n = n % str.length;
    const left = str.slice(0,n);
    const right = str.slice(n);
    return `${right}${left}`;
}