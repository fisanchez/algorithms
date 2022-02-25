/*
Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all the integers in the range [1, n]
that do not appear in nums.

Complexities:
Time: O(n) where n is the array size
Space: O(n) where n is the array size


Results:
Runtime: 156 ms, faster than 57.14% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 52.7 MB, less than 28.96% of JavaScript online submissions for Find All Numbers Disappeared in an Array.

*/

// [1,2,3,6] n = 6
// [1,2,3,4,5,6]
// output => [4,5]

// const findDisappearedNumbers = (nums) => {
//   let set = new Set(nums)
//   let missing = []

//   for(var i = 1; i <= nums.length; i++){
//     if(!set.has(i)){missing.push(i)}
//   }

//   return missing
// }

// let testArray = [4,3,2,7,8,2,3,1]
// findDisappearedNumbers(testArray)


/*
Follow up: Could you do it without extra space and in O(n) runtime?
You may assume the returned list does not count as extra space.

Complexity:
Time: O(n)
Space: O(n)
*/

// index is n + 1
// value is n - 1
const findDisappearedNumbers2 = (nums) =>{
  // range is [1, n]
  let missing = []

  for( var num of nums){
    let index = Math.abs(num) - 1
    nums[index] = -1 * Math.abs(num[index])
  }

  nums //?
  for(var i = 0; i < results.length; i++){
    if(results[i] == undefined){missing.push(i + 1)}
  }

  return missing
}

let nums = [4,3,2,7,8,2,3,1]
findDisappearedNumbers2(nums) //?
