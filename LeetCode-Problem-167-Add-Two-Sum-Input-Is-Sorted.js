function addtwoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum < target) {
      left++;
    } else if (sum === target) {
      return [left + 1, right + 1];
    } else {
      right--;
    }
  }
}
console.log(addtwoSum([1, 2, 3, 5, 6, 8, 9], 7));
