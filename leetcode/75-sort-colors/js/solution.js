/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

*/

const sortColors = (nums) => {
  const swap = (i,j) =>{
    let temp = nums[i]

    nums[i] = nums[j]
    nums[j] = temp
  }

  let i = 0
  let left = 0
  let right = nums.length - 1

  while(i<= right){
    if(nums[i] == 0){
      swap(left, i)
      left++
    }
    else if(nums[i] == 2){
      swap(i, right)
      right--
      i--
    }
    i++
  }
  return nums
}

// Tests
const nums_list = [
  [0,0,2,1,1,2],
  [2,0,1]
]

for(let nums of nums_list){
  sortColors(nums) == nums.sort() //?
}
