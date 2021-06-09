//

const smallestNumber = arr =>{
  let smallest = arr[0]
  let smallest_index = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
      smallest = arr[i]
      smallest_index = i
    }
  }
  return smallest_index
}

const findSmallest = arr =>{
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    smallest = findSmallest(arr)
    newArr.push(arr.splice(smallest,1))
  }
  return newArr
}

let myArr = [23,7,9,10]
console.log(
  smallestNumber(myArr)
)
