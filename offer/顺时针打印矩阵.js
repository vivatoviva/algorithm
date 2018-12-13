function printMatrix(matrix)
{
    // write code here
    let num = matrix.length / 2;
    const len = matrix.length;
    let nowLen = len;

    for(let i = 0; i < num; i++) {
      for (let j = 0; j < nowLen * 4 - len; j++) {
        if (j < nowLen) {
          // 第一层
          console.log(i * len + i + j + 1);
        } else if (j < nowLen * 2 - 1) {
          // 第二层
          console.log();
        } else if (j < nowLen * 3 - 2) {
          console.log();
        } else {
          console.log();
        }
      }
      nowLen = nowLen - 2;
    }
}
