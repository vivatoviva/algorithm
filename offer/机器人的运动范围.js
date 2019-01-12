// 这种方法可能导致有的点是符合要求的，但是走不到，所以要使用回溯方法进行求解
function movingCount(threshold, rows, cols)
{
    // write code here

    // 广度优先遍历算法
    let result = 0;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // 求出 i，j的数位之和，和threshold进行对比
        if (getDigitSUM(i, j) <= threshold) {
          result++;
        }
      }
    }
    return result;
}

// i 和 j 的数位之和
function getDigitSUM(i, j) {
    // 使用字符串方法来解决这个问题
    const item = [...i.toString().split(""), ...j.toString().split('')];
    let value = 0;
    item.forEach(currentVlaue => value += parseInt(currentVlaue));
    return value;
}


function movingCount(threshold, rows, cols) {
  var visited = [];
  for (var i = 0; i < rows; i++) {
    visited.push([]);
    for (var j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }
  return moveCount(threshold, rows, cols, 0, 0, visited);
}

function moveCount(threshold, rows, cols, row, col, visited) {
  if (row < 0 || row == rows || col < 0 || col == cols || visited[row][col]) {
    return 0;
  }
  var sum = 0;
  var temp = row + "" + col;
  for (var i = 0; i < temp.length; i++) {
    sum += temp.charAt(i) / 1;
  }
  if (sum > threshold) {
    return 0
  }
  visited[row][col] = true;
  return 1 + moveCount(threshold, rows, cols, row, col - 1, visited) +
    moveCount(threshold, rows, cols, row, col + 1, visited) +
    moveCount(threshold, rows, cols, row - 1, col, visited) +
    moveCount(threshold, rows, cols, row + 1, col, visited);
}
