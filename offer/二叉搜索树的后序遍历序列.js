// 使用递归的方式实现
function VerifySquenceOfBST(sequence)
{
    // write code here
    let result = true;
    if (sequence.length == 0) return false;
    try {
      const [left, right] = splice(sequence);
      if (!left || !right) return false;
      if(left.length > 2) result = result && VerifySquenceOfBST(left);
      if(right.length > 2) result = result && VerifySquenceOfBST(right);
      return result;
    } catch(e) {
      return false;
    }
}

// 根据最后一项将数组分为两组
function splice(sequence) {
  const left = [];
  let right = [];
  const root = sequence.pop(); // 顶部节点

  const temp = [...sequence];
  // 将数组分为两组
  for (let i = 0, len = temp.length; i < len; i++) {
    if (temp[i] < root) {
      left.push(sequence.shift());
    } else {
      break;
    }
  }
  right = sequence;
  // 判断分的数组是不是符合规矩
  if(Math.min(...right) < root) throw new Error('no splice');
  return [left, right];
}

console.log(VerifySquenceOfBST([7,4,6,5]))

// 别人的做法（优秀，函数职责分的分开，并且使用标志位值得学习）
function VerifySquenceOfBST(sequence) {
  if(!sequence.length) {
      return false;
  }
  return adjustSquence(sequence,0,sequence.length-1);
}

function adjustSquence(sequence,start,end) {
  if (start >= end) {
      return true;
  }
  var i = start;
  while (i < end && sequence[i] < sequence[end]) {
      i++;
  }
  for(var j = i; j < end; j++){
      if(sequence[j] < sequence[end]) {
          return false;
      }
  }
  return adjustSquence(sequence,start,i-1) && adjustSquence(sequence,i,end-1)
}