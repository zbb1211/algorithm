// 给定两个数组，编写一个函数来计算他们的交集

// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]

// 示例 2:
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
// 说明:

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

var intersection = (array1, array2) => {
  const visited = {};
  const ret = [];
  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];
    visited[item] = item;
  }
  for (let j = 0; j < array2.length; j++) {
    const item = array2[j];
    if (visited[item] != undefined) {
      ret.push(item);
      visited[item] = undefined;
    }
  }
  return ret;
}

var intersection1 = (array1, array2) => {
  return [...new Set(array1.filter(item => array2.includes(item)))]
}