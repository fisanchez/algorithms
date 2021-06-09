const getSides = (arr, pivot) =>{
  let left = []
  let right = []
  for(let i = 0; i < arr.length; i++){
    arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i])
  }
  return [left,right]
}
function quickSort(arr){
  if(arr.length < 2){
    return arr
  }
  let pivot = arr[Math.floor(Math.random() * arr.length)]
  arr.splice(arr.indexOf(pivot), 1)
  let [left, right] = getSides(arr, pivot)
  return quickSort(left).concat(pivot).concat(quickSort(right))
}

console.log(
  quickSort([2]) == 2,
  quickSort([5,21,4,1])
)
