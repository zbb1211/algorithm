// 给定一个整数（有符号32位），编写一个函数检查其是否是4的幂。
// 例一：
// 输入： 16
// 输出： true

// 例二：
// 输入： 5
// 输出： false

// 4   -- toString(2) -- 100
// 16  -- toString(2) -- 10000
// 64  -- toString(2) -- 1000000
// 256 -- toString(2) -- 100000000

var isPowerOfFour = num => {
  return /^1(00)*$/.test(num.toString(2))
}