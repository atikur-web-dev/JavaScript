const reverseVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let arr = s.split('');
  let arry = ""
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // Checking if there is no vowel in Left
    while (left < right && !vowels.has(arr[left])) {
        left ++
    }
    // Checking if ther is no vowel in right 
    while (left < right && !vowels.has(arr[right])) {
        right --;
    }
    // shap vowles 
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left ++;
    right --;
  }
  return arr.join('')
};

console.log(reverseVowels("hello"));     
console.log(reverseVowels("leetcode")); 
console.log(reverseVowels("aA"));      
console.log(reverseVowels("bcdfg"));    
console.log(reverseVowels(""));       