const sortColors = (nums) =>{
  const swap = (i, j) =>{
    const temp = nums[i]

    nums[i] = nums[j]
    nums[j] = temp
  }
  let left = 0
  let right = nums.length - 1
  let index = 0

  while(index <= right){
    if(nums[index] == 0){
      swap(index, left)
      left++
    }
    else if(nums[index] == 2){
      swap(index, right)
      right--
      index--
    }
    index++
  }
  return nums
}


const nums_list = [
  [2,0,2,1,1,0],
  [1,2,0]
]
for(let list of nums_list){
  sortColors(list) //?
}
