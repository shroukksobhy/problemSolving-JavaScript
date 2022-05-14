//13. Roman to Integer
//Done
var romanToInt = function (s) {
    let remoanSymbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    if (s == null) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (remoanSymbols[s[i]] >= remoanSymbols[s[i + 1]] || (i + 1) == s.length) {
            result += remoanSymbols[s[i]];
            console.log(result);
        } else {
            result += remoanSymbols[s[i + 1]] - remoanSymbols[s[i]];
            i++;
            console.log(result);
        }

    }
    return result;

};
let input = "MCMXCIV";
console.log(romanToInt(input));