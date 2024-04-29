function isValid(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(')')
        } else if (s[i] == '[') {
            stack.push(']')
        } else if (s[i] == '{') {
            stack.push('}')
        }
        else {
            let topElement = stack.pop();
            if (s[i] !== topElement) {
                return false;
            }
        }

    }
    return stack.length == 0;
}
s = "(]";
// s = "()";
// s = "()[]{}"
console.log(isValid(s));