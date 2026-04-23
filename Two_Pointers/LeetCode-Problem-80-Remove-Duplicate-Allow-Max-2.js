// Remove Duplcate allow max 2
function removeDuplicate(array) {
  let left = 2;
  for (let right = 2; right < array.length; right++) {
    if (array[right] !== array[left - 2]) {
      array[left] = array[right];
      left++;
    }
  }
  return left ;
}

let arr = [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9, 9];
let leng = removeDuplicate(arr);
console.log(arr.slice(0, leng));
