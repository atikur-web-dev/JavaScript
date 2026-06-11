// const reverseVowels = function (s) {
//   let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
//   let arr = s.split('');
//   let arry = ""
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     // Checking if there is no vowel in Left
//     while (left < right && !vowels.has(arr[left])) {
//         left ++
//     }
//     // Checking if ther is no vowel in right 
//     while (left < right && !vowels.has(arr[right])) {
//         right --;
//     }
//     // shap vowles 
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//     left ++;
//     right --;
//   }
//   return arr.join('')
// };

// console.log(reverseVowels("hello"));     
// console.log(reverseVowels("leetcode")); 
// console.log(reverseVowels("aA"));      
// console.log(reverseVowels("bcdfg"));    
// console.log(reverseVowels(""));

def reverseVowels(s):
    vowels = set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
    arr = list(s)
    left = 0
    right = len(arr) - 1
    
    while left < right:
        # Checking if there is no vowel on Left
        while left < right and arr[left] not in vowels:
            left += 1
        # Checking if there is no vowel on Right
        while left < right and arr[right] not in vowels:
            right -= 1
        # swap vowels
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    
    return ''.join(arr)

print(reverseVowels("hello"))     
print(reverseVowels("leetcode")) 
print(reverseVowels("aA"))      
print(reverseVowels("bcdfg"))    
print(reverseVowels(""))