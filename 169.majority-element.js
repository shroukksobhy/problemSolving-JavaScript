//The majority element is the element that appears more than ⌊n / 2⌋times.
// You may assume that the majority element always exists in the array.



var majorityElement = function (nums) {
    let majority = (nums.length / 2);
    let hashMap = {};
    // Loop through the array and count the occurrences of each element
    nums.forEach(element => {
        if (hashMap[element] === undefined) {
            hashMap[element] = 1;
        } else {
            hashMap[element]++;
        }
    });

    // Log the count for each element
    for (let key in hashMap) {
        if (hashMap[key] > majority) {
            return key
        }
    }
};
console.log(majorityElement([3, 2, 3]));
