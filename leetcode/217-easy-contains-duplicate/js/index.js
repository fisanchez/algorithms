// Given an integer array nums,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

/*brute force
Time: O(n^2)
We are iterating through every item twice

Space: O(1)
We are not taking up any additional space

Leetcode results:
Runtime:
1156 ms, faster than 12.47% of JavaScript
online submissions for Contains Duplicate.

Memory Usage:
48.5 MB, less than 55.82% of JavaScript
online submissions for Contains Duplicate.

*/

// var containsDuplicate = function(nums) {
//   for(var i =0; i < nums.length; i++){
//     for(var j = i + 1; j < nums.length; j++){
//       if(nums[i] == nums[j]){return true}
//     }
//   }
//   return false
// };

/* Optimal solution
Time: O(n) where n is the input size
We are only iterating through the array once

Space: O(n) where n is the input size
We are adding to our set as our input size grows

Leetcode results:
Runtime:
162 ms, faster than 37.09% of JavaScript
online submissions for Contains Duplicate.

Memory Usage:
50.9 MB, less than 22.11% of JavaScript
online submissions for Contains Duplicate.

*/

var containsDuplicate = function(nums) {
  let set = new Set()

  for(let num of nums){
    if(set.has(num)){return true}
    set.add(num)
  }
  return false
};


// tests
nums = [1,2,3,1]
false_nums = [1,2,3,4]

console.log(
  containsDuplicate(nums) == true,
  containsDuplicate(false_nums) == false
)
