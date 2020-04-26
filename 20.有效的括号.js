// 给定一个只包含‘（’，‘）’，‘{’，‘}’，‘[’，‘]’的字符串，判断字符串是否有效。
// 有效字符串需满足：
//  1.左括号必须用相同类型的右括号闭合
//  2.左括号必须以正确的顺序闭合

// 示例 1:
// 输入: "()"
// 输出: true

// 示例 2:
// 输入: "()[]{}"
// 输出: true

// 示例 3:
// 输入: "(]"
// 输出: false

// 示例 4:
// 输入: "([)]"
// 输出: false

// 示例 5:
// 输入: "{[]}"
// 输出: true

const isValid = str => {
  const mapper = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let stack = [];
  for (let i in str) {
    const v = str[i];
    if (['{', '[', '('].indexOf(mapper[v]) > -1) {
      stack.push(v)
    } else {
      const peek = stack.pop();
      if (mapper[peek] !== v) {
        return false
      }
    }
  }
  if (stack.length > 0) return false;
  return true
}
