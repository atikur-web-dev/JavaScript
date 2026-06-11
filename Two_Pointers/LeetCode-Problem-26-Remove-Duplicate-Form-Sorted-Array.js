// // git remote add origin https://github.com/atikur-web-dev/JavaScript.git
// // ইনপুট: [1, 2, 2, 3, 3, 3, 4, 5, 5]
// // 1. unique element কতগুলো?
// // 2. ফাইনাল array কেমন হবে?
// function removeDuplicate(array) {
//   let left = 0;
//   for (let right = 1; right < array.length; right++) {
//     if (array[left] !== array[right]) {
//       left++;
//       array[left] = array[right];
//     }
//   }
//   return left + 1;
// }

// let arr = [1, 2, 2, 3, 3, 3, 4, 5, 5];
// let lenghtCal = removeDuplicate(arr);
// console.log(lenghtCal);
// console.log(arr.slice(0, lenghtCal));

# git remote add origin https://github.com/atikur-web-dev/JavaScript.git
# ইনপুট: [1, 2, 2, 3, 3, 3, 4, 5, 5]
# 1. unique element কতগুলো?
# 2. ফাইনাল array কেমন হবে?
def removeDuplicate(array):
    left = 0
    for right in range(1, len(array)):
        if array[left] != array[right]:
            left += 1
            array[left] = array[right]
    return left + 1

arr = [1, 2, 2, 3, 3, 3, 4, 5, 5]
lengthCal = removeDuplicate(arr)
print(lengthCal)
print(arr[:lengthCal])