
// 387. First Unique Character in a String

let s = "aabbac";
let result = nonRepetingChar(s);
console.log(result);
function nonRepetingChar(str) {
    let hashMap = addInHashMap(str); //o(n)
    for (let i = 0; i < str.length; i++) {
        if (str[i] in hashMap && hashMap[str[i]] == 1) {
            return i;
        }
    }
    // console.log(hashMap)
    // let firstNotRepeting = getFirstNonRepeting(hashMap);
    // console.log(firstNotRepeting)
    // if (firstNotRepeting != '-') {
    //     let char = getIndexOfNotRepeting(firstNotRepeting, str);
    //     return char;
    // } else {
    //     result - 1;
    // }


}
function getIndexOfNotRepeting(nonRepetingChar, str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == nonRepetingChar) {
            return i;
        }
    }

}
function getCharRepetingChar(str) {
    let hashMap = {};
    for (let character of str) {
        if (!(character in hashMap)) {
            hashMap[character] = 1;
        } else {
            hashMap[character]++;
        }
    }
    return hashMap;

}
function getFirstNonRepeting(hashMap) {
    let firstNotRepeting = "-";
    for (let first in hashMap) {
        if (hashMap[first] == 1) {
            firstNotRepeting = first;
            return firstNotRepeting;
        }
    }
    return firstNotRepeting;
}
function addInHashMap(str) {
    let hashMap = {};
    for (let character of str) {
        if (!(character in hashMap)) {
            hashMap[character] = 1;
        } else {
            hashMap[character]++;
        }
    }
    return hashMap;
}
