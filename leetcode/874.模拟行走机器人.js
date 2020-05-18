// 机器人在一个无限大小的网格上行走，从（0， 0）处开始出发，面向北方。该机器人可以接收一下三种类型的命令：
// -2: 向左转90度
// -1: 向右转90度
// 1 <= x <= 9: 向前移动X个单位长度
// 在网格上有一些格子被视为障碍物
// 第i个障碍物位于网格点（obstacles[i][0], obstacles[i][1]）
// 如果机器人试图走到障碍物上方，那么他将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其他部分。
// 返回从原点到机器人的最大欧式距离的平方

// 示例 1：
// 输入: commands = [4,-1,3], obstacles = []
// 输出: 25
// 解释: 机器人将会到达 (3, 4)

// 示例 2：
// 输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
// 输出: 65
// 解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处

// 提示：
// 0 <= commands.length <= 10000
// 0 <= obstacles.length <= 10000
// -30000 <= obstacle[i][0] <= 30000
// -30000 <= obstacle[i][1] <= 30000
// 答案保证小于 2 ^ 31

const robotSim = (commands, obstacles) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let di = 0;
  let endX = 0;
  let endY = 0;
  let result = 0;
  let hashObstacle = {}
  for (let r = 0; r < obstacles.length; r++) {
    hashObstacle[obstacles[r][0] + '-' + obstacles[r][1]] = true;
  }
  for (let s = 0; s < commands.length; s++) {
    if (commands[s] === -2) {
      di = (di + 3) % 4;
    } else if (commands[s] === -1) {
      di = (di + 1) % 4;
    } else {
      for (let z = 1; z <= commands[s]; z++) {
        let nextX = endX + dx[di];
        let nextY = endY + dy[di];
        // 判断下一步是否为障碍物
        if (hashObstacle[nextX + '-' + nextY]) break;
        endX = nextX;
        endY = nextY;
        result = Math.max(result, endX * endX + endY * endY)
      }
    }
  }
  return result
}