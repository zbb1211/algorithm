// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

// [-2, 3, -1, 1, -3]
// 初始化：sum = 0, ans = -2
// num = -2, sum < 0, sum = -2, ans = -2
// num = 3, sum < 0, sum = 3, ans = 3
// num = -1, sum > 0, sum = 2, ans = 3
// num = 1, sum > 0, sum = 3, ans = 3
// num = -3, sum > 0, sum = 0, ans = 3
var maxSubArray = nums => {
  let ans = nums[0];
  let sum = 0;
  for (let num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
}

// 我们定义函数 S(i) ，它的功能是计算以 0（包括 0）开始加到 i（包括 i）的值。

// 那么 S(j) - S(i - 1) 就等于 从 i 开始（包括 i）加到 j（包括 j）的值。

// 我们进一步分析，实际上我们只需要遍历一次计算出所有的 S(i), 其中 i = 0,1,2....,n-1。 然后我们再减去之前的 S(k),其中 k = 0，1，i - 1，中的最小值即可。
// 因此我们需要 用一个变量来维护这个最小值，还需要一个变量维护最大值。

var maxSubArray = nums => {
  const len = nums.length;
  let max = -Number.MAX_VALUE;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (sum - min > max) {
      max = sum - min
    }
    if (sum < min) {
      min = sum;
    }
  }
  return max;
}