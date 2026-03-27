function Backspace (str) {
    let stack = [];
    for (let char of str) {
        if (char !== '#') {
            stack.push(char)
        }
        else {
            stack.pop()
        }
    }
    return stack.join('');

}

function checkBackspace (s, t) {
    if (s !== t) {
        return false;
    }
    return true
}

let str1 = "ab##";
console.log("Str1(s) : ", Backspace(str1) )
let str2 =  "c#d#";
console.log("Str2(t) : ", Backspace(str2) )
console.log("Does it Matched? : ", checkBackspace(Backspace(str1), Backspace(str2)))