// function threeSum(nums) {
//   nums.sort((a, b) => a - b);

//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       let sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]]);

//         left++;
//         right--;

//         while (left < right && nums[left] === nums[left - 1]) left++;

//         while (left < right && nums[right] === nums[right + 1]) right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }

//   return result;
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

def threeSum(nums):
    nums.sort()

    result = []

    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left = i + 1
        right = len(nums) - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]

            if total == 0:
                result.append([nums[i], nums[left], nums[right]])

                left += 1
                right -= 1

                while left < right and nums[left] == nums[left - 1]:
                    left += 1

                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1

    return result

print(threeSum([-1, 0, 1, 2, -1, -4]))