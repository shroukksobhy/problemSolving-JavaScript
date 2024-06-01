// 151. Reverse Words in a String
function reverseString(str) {
    str = str.trim();
    let arr = str.split(' ');
    let secArr = []
    console.log(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== "  ")
            secArr.push(arr[i]);
    }
    let secStr = secArr.join(" ");
    return secStr;
}
// let str = "  hello world  ";
let str = "a good   example";
console.log(reverseString(str));