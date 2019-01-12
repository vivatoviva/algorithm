/**
 *
 *
 * @param {无序列数组} array
 * @param {需要寻找几个数} num
 * @description {假设一个探险家被困在了地底的迷宫之中，要从当前位置开始找到一条通往迷宫出口的路径。
 * 迷宫可以用一个二维矩阵组成，有的部分是墙，有的部分是路。迷宫之中有的路上还有门，每扇门都在迷宫的
 * 某个地方有与之匹配的钥匙，只有先拿到钥匙才能打开门。请设计一个算法，帮助探险家找到脱困的最短路径。
 * 如前所述，迷宫是通过一个二维矩阵表示的，每个元素的值的含义如下 0-墙，1-路，2-探险家的起始位置，
 * 3-迷宫的出口，大写字母-门，小写字母-对应大写字母所代表的门的钥匙}
 * @description {使用广度优先算法，首先应该找到探险家起始位置，然后进行广度优先遍历算法}
 */


