// 给定一个整数数组nums和一个目标值target，请在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
// 你可以假设每种输入只对应一个答案。但是数组中同一个元素不能使用两遍。

// 示例：
// 给定nums=[2, 7, 11, 15], target= 9；
// 给定nums[0] + nums[1] = 2 + 7 = 9
// 所以返回[0, 1]

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (map.has(num)) return [map.get(num), i]
    map.set(nums[i], i);
  }
}

const twoSum1 = (nums, target) => {
  let map = {};
  let loop = 0;
  let dis;
  while(loop < nums.length) {
    dis = target - nums[loop];
    if (map[dis] != undefined) return [map[dis], loop];
    map[nums[loop]] = loop;
    loop++;
  }
}