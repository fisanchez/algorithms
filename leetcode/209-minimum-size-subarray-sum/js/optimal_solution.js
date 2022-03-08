const minSubArrayLen = (target, nums) =>{
  let left = 0
  let sum = 0
  let result = Infinity

  for(let right = 0; right < nums.length; right++){
    sum += nums[right]
    // Let's look for a smaller result
    while(sum >= target){
      result = Math.min(right - left + 1, result)
      sum -= nums[left]
      left++
    }
  }

  return result == Infinity ? 0 : result
}

const testInputsPairs = [
  [7, [2,3,1,2,4,3]]
]

for(let pair of testInputsPairs){
  minSubArrayLen(pair[0], pair[1]) //?
}
