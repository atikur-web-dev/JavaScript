// // git remote add origin https://github.com/atikur-web-dev/JavaScript.git
// // Container With Most Water
// function maxWater(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let max = 0;
//   while (left < right) {
//     let Area = Math.min(height[left], height[right]) * (right - left);
//     if (max < Area) {
//       max = Area;
//     }
//     if (height[left] > height[right]) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return max;
// }
// console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 9]));

# git remote add origin https://github.com/atikur-web-dev/JavaScript.git
# Container With Most Water
def maxWater(height):
    left = 0
    right = len(height) - 1
    max_area = 0
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        if max_area < area:
            max_area = area
        if height[left] > height[right]:
            right -= 1
        else:
            left += 1
    return max_area

print(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 9]))