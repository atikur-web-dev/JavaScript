// Move all Zero to end
function moveZero(array) {
  let left = 0;
  for (let right = 0; right < array.length; right++) {
    if (array[right] !== 0) {
      array[left] = array[right];
      left++;
    }
  }
  for (let right = left + 1; right < array.length; right++) {
    array[right] = 0;
  }
  return array;
}
let arr = [0, 1, 0, 0, 3, 0, 5, 0, 7, 0, 9];
let cal = moveZero(arr);
console.log(cal);
