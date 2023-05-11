/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    var unique=[];
    for(let i=0;i<nums.length;i++){
        if(!unique.includes(nums[i])){
            unique.push(nums[i])
        }
    }
    return unique;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

//remove duplicates in-place that is without creating a new array
function removeDuplicates(nums) {
    let nextUniqueIndex=0;
    for (let i=1;i< nums.length;i++){
        if(nums[i]!==nums[nextUniqueIndex]){
            nextUniqueIndex++
            nums[nextUniqueIndex]=nums[i];
        }
    }
    return nextUniqueIndex+1
}