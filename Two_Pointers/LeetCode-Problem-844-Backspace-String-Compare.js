function backspaceCompare(s, t) {
    // Two pointers - end theke start korchi (backspace effect easier handle er jonno)
    let i = s.length - 1;  // s string er last index
    let j = t.length - 1;  // t string er last index
    
    // Jotokhon na duita pointer e shesh hoye jay (both -1)
    while (i >= 0 || j >= 0) {
        
        // ========== S string er next valid character find ==========
        let skipS = 0;  // Koyta backspace skip korte hobe tar counter
        
        while (i >= 0) {
            if (s[i] === '#') {
                // Backspace peye gele, skip count barabo
                skipS++;
                i--;
            } else if (skipS > 0) {
                // Backspace er por normal character peye gele, eta skip korte hobe
                skipS--;
                i--;
            } else {
                // Backspace nei, and skip kora lagbe na - eta valid character
                break;
            }
        }
        
        // ========== T string er next valid character find ==========
        let skipT = 0;  // T er jonno skip counter
        
        while (j >= 0) {
            if (t[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }
        
        // ========== Compare valid characters ==========
        
        // Case 1: Duita string e valid character ache
        if (i >= 0 && j >= 0) {
            if (s[i] !== t[j]) {
                return false;  // Character mismatch
            }
        } 
        // Case 2: Ekta string e valid character ache, arekta te nei
        else if (i >= 0 || j >= 0) {
            return false;  // Length mismatch
        }
        // Case 3: Duitai sesh (both -1) - continue kore next iteration e check korbe
        
        // Pointers move koro next comparison er jonno
        i--;
        j--;
    }
    
    // Now strings are equal after backspace
    return true;
}

// Test koro
console.log(backspaceCompare("ab##", "c#d#")); 

