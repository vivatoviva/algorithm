// 回溯思想解决
function Permutation(str)
{
    // write code here
    const result = [];
    function swap(str, index) {
      const length = str.length;
      if(length === index + 1) {
        return result.push(str);
      }
      for(let i = index; i < length; i++) {
          const strarr = str.split('');
          const item = strarr[i];
          strarr[i] = strarr[index];
          strarr[index] = item;
          swap(strarr.join(''), index + 1);
      }
    }
    swap(str, 0);
    // 通过测试用例需要进行排序
    return [ ...new Set(result)].sort();
}

console.log(Permutation('abc'))

// 通过枚举迭代实现
var result = [];
function Permutation(str) {
    result = []
    if(str.length<=0) return result;
    var sortTmp = "";
    var arr = str.split("");
    result = sortString(arr, sortTmp)
    return result;
}
 
function sortString(arr,sortTmp){
    if(arr.length ==0 ){
        result.push(sortTmp);
    }else{
        var isRepeated = {};
        for(var i = 0; i < arr.length; i++){
            if(!isRepeated[arr[i]]){
                var p = arr.splice(i,1)[0];
                sortTmp += p;
                sortString(arr, sortTmp);
                arr.splice(i,0,p); //恢复字符串
                sortTmp = sortTmp.slice(0,sortTmp.length-1);
                isRepeated[p] = true;
            }
        }
    }
    return result;
}
