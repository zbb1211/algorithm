// 给定一个费控整数数组，除了某个元素只出现一次以外，其余元素均出现两次。
// 找出那个只出现了一次的元素。
// 说明：你的算法应该具有线性时间复杂度，可以不适用额外空间来实现吗？
// 示例1：
// 输入：[2, 2, 1]
// 输出：1

// 示例2：
// 输入：[4, 1, 2, 1, 2]
// 输出：4

var singleNumber = nums => {
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]] !== undefined) {
      delete numsObj[nums[i]]
    } else {
      numsObj[nums[i]] = 1;
    }
  }
  return Object.keys(numsObj)[0]
}

var singleNumber1 = nums => {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i]
  }
}