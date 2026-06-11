// // Remove Elements
// function removeElements(nums, k) {
//   let left = 0;
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== k) {
//       nums[left] = nums[right];
//       left++;
//     }
//   }
//   return left;
// }

// let Arry = [3, 2, 2, 3, 4, 6];
// let Length = removeElements(Arry, 3);
// console.log(Length);
// console.log(Arry.slice(0, Length));

# Remove Elements
def removeElements(nums, k):
    left = 0
    for right in range(len(nums)):
        if nums[right] != k:
            nums[left] = nums[right]
            left += 1
    return left

Arry = [3, 2, 2, 3, 4, 6]
Length = removeElements(Arry, 3)
print(Length)
print(Arry[:Length])