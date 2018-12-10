// 常规做法
function Power1(base, exponent)
{
    // write code here
    let num = 1;
    while(exponent--) {
      num *= base
    }
    return num;
}

// 二分法改进
function Power2(base, exponent) {
  let num = base;
  if(exponent === 0) return 1;
  if (exponent < 0 && base == 0) throw new Error('分母不能为0');
  let isadd = exponent % 2 && exponent !== 1;
  while (exponent !== 1) {
    num *= num;
    exponent = Math.floor(exponent / 2)
  }
  if(isadd) {
    num *= base;
  }
  return num;
}

// 推荐这篇文章： https://zhuanlan.zhihu.com/p/42639682
// 快速幂
function Power3(base, exponent) {
  const isAdd = exponent < 0;
  if(exponent < 0) {
      if(base===0) throw new new Error("分母不能为0"); 
      exponent = -exponent;
  }
  if (exponent === 0) return 1;
  let result = 1;
  while(exponent) {
    if (exponent&1) result *= base;
    base *=base;
    exponent >>= 1;
  }
  return !isAdd ? result : 1 / result;
}


console.log(Power3(2,10))

// 矩阵快速幂

function Power4() {

}