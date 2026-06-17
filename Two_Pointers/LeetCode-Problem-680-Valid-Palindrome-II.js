function isValidPalindromeII(str) {
  // Clean the string first
  let cleaned = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      cleaned += char.toLowerCase();
    }
  }

  // Now use cleaned string
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return isPalindrome(cleaned, left + 1, right) || 
             isPalindrome(cleaned, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
}

function isPalindrome(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let str1 = 'abcbbbbca';
console.log(isValidPalindromeII(str1));  

