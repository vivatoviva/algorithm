// 使用KMP算法来搜索字符串
// https://www.bilibili.com/video/av16828557?spm_id_from=333.338.b_7265636f6d6d656e645f7265706f7274.1
function create_prefix(arr) {
  let i = 1;
  let len = 0;
  const prefix = [0];
  while(i < arr.length) {
    if(arr[len] === arr[i]) {
      len++;
      i++;
      prefix.push(len);
    } else {
      if (len > 0) {
        len = prefix[len - 1];
      } else {
        prefix.push(len);
        i++;
      }
    }
  }
  // 移动prefix位置
  prefix.unshift(-1);
  prefix.pop();
  return prefix;
}

function KMP_Search(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  let i = 0; // 记录当前对比text位置
  let j = 0; // 记录当前对比的pattern位置
  const prefix = create_prefix(pattern);
  while(i - j + patternLength <= textLength && i < textLength) {
    if (j === patternLength - 1 && text[i] === pattern[j]) {
        console.log(`Find Pattern at ${i - j}`);
        i++;
        j = 0;
    }
    // 如果当前移动到标准位或者当前匹配成功
    if (j === -1 || text[i] === pattern[j]) {
      i++;
      j++;
    } else {
      j = prefix[j];
    }
  }
}

KMP_Search('abacabaxianaba', 'aba');
