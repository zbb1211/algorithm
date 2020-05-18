// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:
// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 示例 2:
// 输入: "race a car"
// 输出: false

var isPalindrome = str => {
  // 匹配任何不在指定范围内的任意字符。例如，“[^a-z]”可以匹配任何不在“a”到“z”范围内的任意字符。
  str = str.replace(/[^0-9a-zA-Z]/g, '').toLowercase().split('')
  return str.join('') === str.reverse().join('')
}

var isPalindrome = str => {
  // 匹配任何不在指定范围内的任意字符。例如，“[^a-z]”可以匹配任何不在“a”到“z”范围内的任意字符。
  str = str.replace(/[^0-9a-zA-Z]/g, '').toLowercase(); // 清除非字母和数字的字符
  let left = 0;
  let right = str.length - 1;
  while(left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true
}
