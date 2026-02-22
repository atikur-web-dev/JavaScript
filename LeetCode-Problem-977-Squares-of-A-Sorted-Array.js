// Square of a Sorted Array
function sortedSqure(nums) {
  let n = nums.length;
  let result = new Array(n);
  let left = 0;
  let right = n - 1;
  let pos = n - 1;
  while (left <= right) {
    let leftValue = nums[left] * nums[left];
    let rightValue = nums[right] * nums[right];
    if (leftValue > rightValue) {
      result[pos] = leftValue;
      left++;
    } else {
      result[pos] = rightValue;
      right--;
    }
    pos--;
  }
  return result;
}
console.log(sortedSqure([-4, -1, 0, 3, 10]));
console.log(sortedSqure([-9, -2, 0, 10, 20]));
