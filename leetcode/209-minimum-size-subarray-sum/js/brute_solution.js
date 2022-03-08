const minSubArrayLength = (nums, target) =>{
  let minCount = Infinity

  // Determining if array has solution
  let numsSum = 0
  for(var i = 0; i < nums.length; i++){
    numsSum += nums[i]
  }

  if(numsSum < target){ return 0}

  for(var i = 0; i < nums.length; i++){
    let count = 1
    let sum = nums[i]

    for(var j = i + 1; j < nums.length; j++){
      sum = sum + nums[j]
      if(sum < target){
        count++
        minCount = Math.min(count, minCount)
      }else{
        minCount = Math.min(count, minCount)
        break
      }
    }
  }

  return minCount
}

const testInputs= [
  [[2,3,1,2,4,3], 7],
  [[1,4,4], 4],
  [[1,1,1,1,1,1,1,1], 11]
]

for(var testInput of testInputs){
  minSubArrayLength(testInput[0], testInput[1]) //?
}
