const numSubarrayProductLessThanK = (nums, k) =>{
  let left = 0
  let right = 0
  let product = 1
  let count = 0

  while(left < nums.length && right < nums.length){
    if((product * nums[right]) < k){
      // update product & count
      product = product * nums[right]
      count += ((right - left) + 1)
      right++
    }else{
      // Remove value from our product
      product = product / nums[left]
      left++
    }
  }
  return count
}

let nums = [10,5,2,6]
let k = 100
numSubarrayProductLessThanK(nums, k) //?
