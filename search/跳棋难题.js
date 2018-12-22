// 采用回溯思想进行迭代求解,保存每步的状态

function valid(situation, index) {
  const name = situation[index];
  if (name === -1) {
    if(situation[index+1] === 0 || situation[index+2] === 0) {
      return true
    }
  } else if (name === 1) {
    if (situation[index - 1] === 0 || situation[index - 2] === 0) {
      return true;
    }
  }
  return false;
}

function solve() {
  const sit = [-1, -1, -1, 0 ,1, 1 ,1];
  const stack = [sit];
  const result = [];
  while(stack.length) {
    let situation = stack.pop();
    // 判断是不是结果
    let sum = 0;
    for(let i = 0; i < 3; i++) {
      sum += i;
    }
    if (sum === 3) {
      result.push(situation);
    }
    for(let i = 0; i < 8; i++) {
      if (valid(situation, i)) {
        const nowName = situation[i];
        stack.push(situation.map((item, index) => {
          if(index === i) {
            return 0
          }
          if (item === 0) {
            return nowName;
          }
          return item;
        }));
      }
    }
  }
  return result;
}

console.log(solve().length);
