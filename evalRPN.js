//150. Evaluate Reverse Polish Notation

function evalRPN(tokens) {
    //token is an array;
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        let result = 0;

        if (!isNaN(tokens[i])) {
            // number;
            stack.push(tokens[i]);
        } else {
            console.log(tokens[i])
            // operator
            let num1 = stack.pop();
            let num2 = stack.pop();
            console.log(num1)
            console.log(num2)

            // +', '-', '*', and '/
            if (tokens[i] == "+") {
                result = parseInt(num1) + parseInt(num2);
            } else if (tokens[i] == "-") {
                result = parseInt(num2) - parseInt(num1);
            } else if (tokens[i] == "*") {
                result = parseInt(num1) * parseInt(num2);
            } else if (tokens[i] == "/") {
                result = parseInt(num2) / parseInt(num1);
                result = Math.trunc(result);
            }
            stack.push(result);
            console.log(result)

        }
    }
    return stack;
}
// let tokens = ["3", "2", "+", "3", "*"];
// let tokens = ["4", "13", "5", "/", "+"];
let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

console.log(evalRPN(tokens));