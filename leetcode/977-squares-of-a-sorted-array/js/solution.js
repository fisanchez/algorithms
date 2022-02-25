/* We could map each number then sort the resulting array
*/

const sortedSquares = (nums) =>{
  let sum = []
  for(num of nums){
    sum.push((num ** 2))
  }

  sum.sort((a,b) => { return a - b })
  return sum
}

let nums = [-4,-1,0,3,10]
sortedSquares(nums) //?

// Follow up: Squaring each element and sorting
// the new array is very trivial, could you find an
// O(n) solution using a different approach?
// in place

const updatedSortedSquares = (nums) =>{
  let results = []
  let leftPointer = 0
  let rightPointer = nums.length - 1

  while(leftPointer <= rightPointer){
    if((nums[leftPointer] ** 2) > (nums[rightPointer] ** 2)){
      results.push(nums[leftPointer] ** 2)
      leftPointer++
    }else{
      results.push(nums[rightPointer] ** 2)
      rightPointer--
    }
  }

  return results.reverse()
}

let nums2 = [-4,-1,0,3,10]
updatedSortedSquares(nums2) //?
