function containsDuplicateN2(nums) {
    //This is O(N^2)
    // RUN TIMEE ERROR IN BIG test case
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }

    }
    return false;

};
function containsDuplicate(nums) {
    //This is O(N)
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in hash)) {
            hash[nums[i]] = 1;
        } else {
            // hash[nums[i]] += 1;
            // duplicates = true;
            return true;
        }
    }
    return false;
};
let nums = [1, 2, 3];
console.log(containsDuplicate(nums));