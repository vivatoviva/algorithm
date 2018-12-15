// 使用递归的方式实现
function VerifySquenceOfBST(sequence)
{
    // write code here
    let result = true;
    // if (sequence.length == 0) return false;
    try {
      const [left, right] = splice(sequence);
      console.log(left, right)
      if (!left || !right) return false;
      if (left.length === 2) result = left[0] < left[1];
      if (right.length === 2) result = result && right[0] < right[1];
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
  for (let i = 0, len = temp.length; i < len; i++) {
    if (temp[i] < root) {
      left.push(sequence.shift());
    } else {
      break;
    }
  }
  right = sequence;
  
  if(Math.min(...right) < root) throw new Error('no splice');
  return [left, right];
}

console.log(VerifySquenceOfBST([7,4,6,5]))