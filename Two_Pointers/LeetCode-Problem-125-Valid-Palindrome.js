// // Valid Palindrome
// function ValidPalindrome (str) {
//    // First, clean the string: remove non-alphanumeric and convert to lowercase
//     let cleaned = "";
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         // Check if character is alphanumeric (a-z, A-Z, 0-9)
//         if ((char >= 'a' && char <= 'z') || 
//             (char >= 'A' && char <= 'Z') || 
//             (char >= '0' && char <= '9')) {
//             cleaned += char.toLowerCase();
//         }
//     }
    
//     // Now two pointer on cleaned string
//     let left = 0;
//     let right = cleaned.length - 1;
    
//     while (left < right) {
//         if (cleaned[left] !== cleaned[right]) {
//             return false; // Mismatch found
//         }
//         left++;
//         right--;
//     }
    
//     return true; 
// }

// let str1 = "A man, a plan, a canal: Panama";
// console.log(ValidPalindrome(str1));

# Valid Palindrome
def ValidPalindrome(str):
    # First, clean the string: remove non-alphanumeric and convert to lowercase
    cleaned = ""
    for i in range(len(str)):
        char = str[i]
        # Check if character is alphanumeric (a-z, A-Z, 0-9)
        if (('a' <= char <= 'z') or 
            ('A' <= char <= 'Z') or 
            ('0' <= char <= '9')):
            cleaned += char.lower()
    
    # Now two pointer on cleaned string
    left = 0
    right = len(cleaned) - 1
    
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False  # Mismatch found
        left += 1
        right -= 1
    
    return True

str1 = "A man, a plan, a canal: Panama"
print(ValidPalindrome(str1))