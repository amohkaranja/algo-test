/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// Given an integer array nums and an integer val, remove all occurrences of val in nums 
// in-place. The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.
var removeElement = function(nums, val) {
let nextUniqueIndex=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nextUniqueIndex++ 
            nums[nextUniqueIndex]=nums[i];
            
        }
    }
  return nextUniqueIndex 
};
console.log(removeElement([3,2,2,3],3));