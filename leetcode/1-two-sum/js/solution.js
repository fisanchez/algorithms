/*
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.
*/

// example nums = [2,7,11,15], target = 9

/* Solution 1 - Brute force

Time: O(n^2) where n is the array lengths of nums
Space: O(1) not creating additional memory
*/

/* BRUTE FORCE

const twoSum = (nums, target) => {
  for(var i = 0; i < nums.length; i++){
    for(var j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] == target){
        return [i, j]
      }
    }
  }
}
*/

/* Hashmap solution
*/

const twoSum = (nums, target) => {
  let map = new Map()
  for(var i = 0; i < nums.length; i++){
    let diff = target - nums[i]
    if(map.has(diff)){
      return [map.get(diff),i]
    }
    map.set(nums[i], i)
  }
}

// let nums = [2,7,11,15]; let target = 9
// >[0,1]
// let nums = [3,2,4]; let target = 6
// > [1,2]
// let nums = [3,3]; let target = 6
// > [0,1]


twoSum(nums, target) //?
