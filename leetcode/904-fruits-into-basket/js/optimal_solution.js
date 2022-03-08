const totalFruit = (nums) =>{
  let left = 0
  let right = 0
  let maxFruitsCounted = 0
  let maxBucketSize = 2
  let bucketMap = {}

  while(right < nums.length){
    let rightValue = nums[right]

    bucketMap[rightValue] = bucketMap[rightValue] + 1 || 1
    let bucketSize = Object.keys(bucketMap).length

    if(bucketSize<= maxBucketSize){
      maxFruitsCounted = Math.max(((right - left) + 1), maxFruitsCounted)
      right++
    }
    else if(bucketSize> maxBucketSize){
      // Remove values from the left until they're removed from hash
      while(Object.keys(bucketMap).length > maxBucketSize){
        let leftValue = nums[left]

        bucketMap[leftValue]--
        if(bucketMap[leftValue] === 0){delete bucketMap[leftValue]}
        left++
      }
      right++
    }
  }

  return maxFruitsCounted
}


// HINT: Remember how the class Map and {} differ in JS

// Tests
// [0,1,2,2] => 3
// [1,2,3,2,2] => 4

const testData = [
  [0,1,2,2],
  [3,3,3,1,2,1,1,2,3,3,4]
]

totalFruit(testData[0]) //?
totalFruit(testData[1]) //?
totalFruit([1,2,3,2,2]) //?
totalFruit([3,3,3,1,2,1,1,2,3,3,4]) //?
