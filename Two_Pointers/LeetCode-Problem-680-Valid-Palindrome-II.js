// function isValidPalindromeII(str) {
//   // Clean the string first
//   let cleaned = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (
//       (char >= "a" && char <= "z") ||
//       (char >= "A" && char <= "Z") ||
//       (char >= "0" && char <= "9")
//     ) {
//       cleaned += char.toLowerCase();
//     }
//   }

//   // Now use cleaned string
//   let left = 0;
//   let right = cleaned.length - 1;
  
//   while (left < right) {
//     if (cleaned[left] !== cleaned[right]) {
//       return isPalindrome(cleaned, left + 1, right) || 
//              isPalindrome(cleaned, left, right - 1);
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// function isPalindrome(str, left, right) {
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// let str1 = 'abcbbbbca';
// console.log(isValidPalindromeII(str1));  

def isValidPalindromeII(str):
    # Clean the string first
    cleaned = ""
    for i in range(len(str)):
        char = str[i]
        if (
            ("a" <= char <= "z") or
            ("A" <= char <= "Z") or
            ("0" <= char <= "9")
        ):
            cleaned += char.lower()
    
    # Now use cleaned string
    left = 0
    right = len(cleaned) - 1
    
    while left < right:
        if cleaned[left] != cleaned[right]:
            return isPalindrome(cleaned, left + 1, right) or \
                   isPalindrome(cleaned, left, right - 1)
        left += 1
        right -= 1
    return True

def isPalindrome(str, left, right):
    while left < right:
        if str[left] != str[right]:
            return False
        left += 1
        right -= 1
    return True

str1 = 'abcbbbbca'
print(isValidPalindromeII(str1))