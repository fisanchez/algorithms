const numSubarrayProductLessThanK = (nums, k) =>{
  let product
  let count = 0

  // check each if each value < k
  for(num of nums){
    if(num < k){count++}
  }

  for(let i = 0; i < nums.length; i++){
    product = nums[i]
    for(let j = (i + 1) ; j < nums.length; j++){
      product *= nums[j]
      if(product < k){count++}
      else{break;}
    }
  }


  return count
}

let nums = [10,5,2,6]
let k = 100
numSubarrayProductLessThanK(nums, k) //?
