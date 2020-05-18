var removeDuplicates = nums => {
  var j = 0;
  var n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
}