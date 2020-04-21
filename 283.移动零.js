// 给定一个数值类型的数组，编写一个函数，移动数组中所有的0值数组末尾，同时保持非零值的相对位置不变

// 示例
// 输入： [0,1,0,3,12]
// 输出： [1,3,12,0,0]

// 注意：不能使用额外的空间

/**
 *  思路： 借助一个游标记录位置，然后遍历一次，将非 0 的原地修改，最后补 0 即可。
 */

var moveZeros = nums => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums
}