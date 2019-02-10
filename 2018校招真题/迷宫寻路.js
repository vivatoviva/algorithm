/**
 *
 *
 * @param {无序列数组} array
 * @param {需要寻找几个数} num
 * @description {假设一个探险家被困在了地底的迷宫之中，要从当前位置开始找到一条通往迷宫出口的路径。
 * 迷宫可以用一个二维矩阵组成，有的部分是墙，有的部分是路。迷宫之中有的路上还有门，每扇门都在迷宫的
 * 某个地方有与之匹配的钥匙，只有先拿到钥匙才能打开门。请设计一个算法，帮助探险家找到脱困的最短路径。
 * 如前所述，迷宫是通过一个二维矩阵表示的，
 * 每个元素的值的含义如下:
 *  0-墙，1-路，2-探险家的起始位置，3-迷宫的出口，大写字母-门，小写字母-对应大写字母所代表的门的钥匙}
 * @description {使用广度优先算法，首先应该找到探险家起始位置，然后进行广度优先遍历算法}
 * 
 */

// 输入地图数据
let [rows, cols] = readline().split(' ');
const map = [];
for (let i = rows; i; i--) {
  const tempMap = readline().split(' ');
  map.push(tempMap);
}

// 根据地图数据寻找出路（广度优先，寻找最短路径）

// 判断位置是否合法
const islegal = ([rowsIndex, colsIndex]) => {
  if (rowsIndex < 0 || colsIndex < 0) {
    return false;
  }
  if (rowsIndex >= rows || colsIndex >= cols) {
    return false;
  }
  return true;
}

const main = () => {
  // 找到列表中数据
  const mapData = {};
  let startLocation; // 开始位置
  let minCount = false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const currentMapValue = map[i][j];
      if (currentMapValue >= 'a' && currentMapValue <='z') {
        mapData[currentMapValue] = [i, j];
      }
      if (currentMapValue == '2') {
        startLocation = [i, j];
      }
    }
  }
  // 使用 广度优先
  const find = function (start, keys, count) {
    // 判断位置在数组中是不是合法
    if (minCount) {return};
    if (!islegal(start)) { return };
    const [row, col] = start;
    const newKeys = [...keys];
    // 当前位置的值
    const currentMapValue = map[row][col];
    // 判断墙和出口
    switch(currentMapValue) {
      case '0': {
        return;
      };
      case '3': {
        minCount = count;
        return count;
      };
    }
    // 判断是否需要钥匙
    if (currentMapValue >= 'A' && currentMapValue <= 'Z') {
      if (keys.includes(currentMapValue)) {
      }
      return
    }
    // 加入钥匙
    if (currentMapValue >= 'a' && currentMapValue <= 'z') {
      newKeys.push(currentMapValue);
    }
    find([row + 1, col], newKeys, count + 1);
    find([row - 1, col], newKeys, count + 1);
    find([row, col + 1], newKeys, count + 1);
    find([row, col - 1], newKeys, count + 1);
  }
  console.log(startLocation, mapData)
  // find(startLocation, [], 1);
  // return minCount;
}

main();
