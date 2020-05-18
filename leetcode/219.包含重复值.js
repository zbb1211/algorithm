// 给出⼀个整形数组nums和⼀个整数k，是否存在索引i和j，使得nums[i] == nums[j] 且i和j之间的差不超过k

// Example 1:  
// Input: nums = [1,2,3,1], k = 3    
// Output: true.

// Example 2:    
// Input: nums = [1,0,1,1], k = 1  
// Output: true

// Example 3:    
// Input: nums = [1,2,3,1,2,3], k = 2  
// Output: false

const containsNearbyDuplicate = (nums, k) => {
  let visited = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (visited[num] == undefined) {
      visited[num] = i;
    } else {
      if (i - visited[num] <= k) return true
      visited[num] = i;
    }
  }
  return false
}

const containsNearbyDuplicate1 = (nums, k) => {
  let visited = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (visited[num] !== undefined && (i - visited[num] <= k)) return true
    visited[num] = i;
  }
  return false
}

const containsNearbyDuplicate2 = (nums, k) => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num)) return true;
    set.add(num);
    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  return false
}