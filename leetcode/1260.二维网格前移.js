// 给你一个n行m列的二维网格grid和一个整数k。你需要将grid迁移k次。
// 每次【迁移】操作将会引发下述活动：
// 位于grid[i][j]的元素将会移动到grid[i][j+1]。
// 位于grid[i][m-1]的元素将会移动到grid[i+1][0]。
// 位于grid[n-1][m-1]的元素将会移动到grid[0][0]。
// 请你返回k次迁移操作后最终得到的二维网格。

// 示例 1：
// 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// 输出：[[9,1,2],[3,4,5],[6,7,8]]

// 示例 2：
// 输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
// 输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

// 示例 3：
// 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
// 输出：[[1,2,3],[4,5,6],[7,8,9]]

// 提示：
// 1 <= grid.length <= 50
// 1 <= grid[i].length <= 50
// -1000 <= grid[i][j] <= 1000
// 0 <= k <= 100


/**
 * 思路：二维数组的行数 = grid.length - 1
 *      二维数组的列数 = grid[0].length - 1
 *  删除子数组的最后一项，将前一个子数组的最后一项插入到第一个位置
 */
const shiftGrid = (grid, k) => {
  const column = grid[0].length - 1; // 列数
  const row = grid.length - 1; // 行数
  for (let i = 0; i < k; i++) {
    let lastItem = grid[row][column];
    for (let j = row; j >= 1; j--) {
      grid[j].splice(column, 1);
      grid[j].unshift(grid[j - 1][column])
    }
    grid[0].splice(column, 1);
    grid[0].unshift(lastItem)
  }
  return grid
}
