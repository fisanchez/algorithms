const totalFruit = (nums) => {
  if(nums.length < 2){return 1}

  let maxFruitsSeen = 0

  for(var i = 0; i<nums.length; i++){
    let currentFruitSeen = 1
    let basket = new Set([nums[i]])
    for(var j = i + 1; j < nums.length; j++){
      basket.add(nums[j])
      if(basket.size > 2){
        break;
      }else{
        currentFruitSeen++
        maxFruitsSeen = Math.max(maxFruitsSeen, currentFruitSeen)
      }
    }
  }
  return maxFruitsSeen
}


const numsList = [
  [1,2,1],
  [0,1,2,2],
  [1,2,3,2,2],
  [3,3,3,1,2,1,1,2,3,3,4]
]

for(let nums of numsList){
  totalFruit(nums) //?
}
