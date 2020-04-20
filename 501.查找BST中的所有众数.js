// 给定一个有相同值的二叉搜索树（BST）,找出BST中的所有众数（出现频率最高的元素）
// 假定BST有如下定义：
// 节点左子树所含节点的值小于等于当前节点的值
// 节点右子树所含节点的值大于等于当前节点的值
// 左子树和右子树都是二叉搜索树
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const findMode = root => {
  var modes = {};
  function search(node) {
    if (!node) return null
    let key = node.val + '';
    debugger
    if (!modes[key]) {
      modes[key] = 1;
    } else {
      modes[key] += 1;
    }
    search(node.left);
    search(node.right);
  }
  search(root);
  let maxCount = null;
  let arr = [];
  for (let key in modes) {
    if (maxCount === null) {
      maxCount = modes[key];
      arr = [key]
    } else {
      if (modes[key] > maxCount) {
        arr = [key]
        maxCount = modes[key]
      } else if (modes[key] === maxCount) {
        arr.push(key)
      }
    }
  }
  return arr;
}