/*
LC 268 - Missing number
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.
*/

/* Solution 1 - Hashset

Complexities
Time: O(n) where n is the size of array
Space: O(n) where n is the size of array

We created a set from the input array, iterated through 0 - n to verify
it's presence.

Results:
Runtime: 134 ms, faster than 29.15% of JavaScript online submissions for Missing Number.
Memory Usage: 48.4 MB, less than 5.03% of JavaScript online submissions for Missing Number.
*/

const missingNumber = (nums) => {
  let set = new Set(nums)

  for(var i = 0; i <= nums.length; i++){
    if(!set.has(i)){return i}
  }
}

/* Optimal solution - difference of sums
Time: O(n) where n is the size of array
Space: O(1)


We are taking the difference of the sum of the range and the input array

sum(range[0,n]) - sum(nums)

Result:
Runtime: 56 ms, faster than 99.72% of JavaScript online submissions for Missing Number.
Memory Usage: 44.6 MB, less than 25.28% of JavaScript online submissions for Missing Number.
*/

const optimalMissingNumber = (nums) => {
  // Including last number
  let sum = nums.length

  for(var i =0; i< nums.length; i++){
    sum += i - nums[i]
  }
  return sum
}

let nums = [9,6,4,2,3,5,7,0,1]
missingNumber(nums)
optimalMissingNumber(nums)
