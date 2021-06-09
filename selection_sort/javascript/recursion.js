// Selection sort
// sorting 📈

// base
// recursion case

const findSmallest = arr =>{
  let smallValue = arr[0]
  let smallIndex = 0

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallValue){
      smallValue = arr[i]
      smallIndex = i
    }
  }
  return smallIndex
}

const selectionSort = arr =>{
  if(arr.length == 0){return []}

  let smallestNumber = arr.splice(findSmallest(arr), 1)
  return smallestNumber.concat(selectionSort(arr))
}

let myArr = [23,7,9,10]
console.log(
  selectionSort(myArr)
)
