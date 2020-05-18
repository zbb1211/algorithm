// 给定一个二叉树，它的每个结点都存放着一个整数值。

// 找出路径和等于给定数值的路径总数。

// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

// 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

// 示例：

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// 返回 3。和等于 8 的路径有:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3.  -3 -> 11

const pathSum = (root, sum) => {
  let count = 0;
  const findRoute = (current, currentSum) => {
    if (!current) return
    if (!current.isVisited) {
      current.isVisited = true;
      current.left && findRoute(current.left, 0);
      current.right && findRoute(current.right, 0);
    }
    let val = currentSum + current.val;
    if (currentSum + current.val === sum) {
      count++;
    }
    current.left && findRoute(current.left, val);
    current.right && findRoute(current.right, val);
  }
  findRoute(root, 0);
  return count;
}

const pathSum1 = (root, sum) => {
  if (root === null) return 0;
  return pathByDFS(root, sum) + pathSum1(root.left, sum) + pathSum1(root.right, sum)
}

var pathByDFS = (root, sum) => {
  if (root === null) return 0;
  let res = 0;
  if (root.val === sum) {
    res++;
  }
  res += pathByDFS(root.left, sum - root.val);
  res += pathByDFS(root.right, sum - root.val);
  return res;
}