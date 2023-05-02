// Adding two numbers
// v1
var twoSum = function(nums, target) {
    var output = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var sum = nums[i] + nums[j];
            if (sum == target) {
                output.push(i);
                output.push(j);
            }
        }
    }
    return output;
};
// v2
var twoSum = function(nums, target) {
    var hashTable = {};
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (complement in hashTable) {
            return [hashTable[complement], i];
        }
        hashTable[nums[i]] = i;
    }
    return null;
};
