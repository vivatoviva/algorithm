function StrToInt(str)
{
    // write code here
    const strArr = str.split("");
    let num = 0;
    const length = strArr.length;
    for(let i = length - 1; i >= 0; i--) {
      const base = Math.pow(10, (length - i -1));
      switch(strArr[i]) {
        case '1': num+=(base * 1); break;
        case '2': num+=(base * 2); break;
        case '3': num+=(base * 3); break;
        case '4': num+=(base * 4); break;
        case '5': num+=(base * 5); break;
        case '6': num+=(base * 6); break;
        case '7': num+=(base * 7); break;
        case '8': num+=(base * 8); break;
        case '9': num+=(base * 9); break;
        case '0': break;
        case '+': {
          if (i !== 0) {
            return 0;
          }
          break;
        };
        case '-': {
          if (i !== 0) {
            return 0;
          } else {
            num *= (-1);
          }
          break;
        };
        default : return 0;
      }
    }
    return num;
}
console.log(StrToInt('+120003'))

// 使用字节编码进行改进
function StrToInt(str) {
  let len = str.length;
  let flag = 1;
  let res = 0;
  if (len === 0) {
    return 0;
  }
  if (str[0] === '-') {
    flag = -1;
  }
  for (let i = (str[0] === '-' || str[0] === '+') ? 1 : 0; i < len; ++i) {
      //利用ASCII码做判断
      if (!(str[i] >= '0' && str[i] <= '9')) {
      return 0;
    }
    res = res * 10 + (str[i] - '0');
  }
  return res * flag;
}
