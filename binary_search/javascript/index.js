// Binary Search

const binary_search = (list, target) => {
  let low = 0;
  let high = (list.length - 1)

  while(low <= high){
    let midIndex = Math.floor((low + high)/2)
    let guess = list[midIndex]
    if(guess == target){return midIndex}
    if(guess > target){
      // We want to search left half
      high = guess - 1
    }
    else{
      // We want to search right half
      low = guess + 1
    }
  }
  return null
}

const listOne = [1, 3, 5, 7, 9];
const listTwo = [1,2,3,4,5,6,7,8,9,10]

console.log(
  binary_search(listOne, 5),
  binary_search(listTwo, 5)
)
