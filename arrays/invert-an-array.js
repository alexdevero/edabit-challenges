function invertArray(arr){
  return arr.map(el => -el || 0)
}

invertArray([1, 2, 3, 4, 5]) // [-1, -2, -3, -4, -5]
invertArray([1, -2, 3, -4, 5]) // [-1, 2, -3, 4, -5]
invertArray([]) // []
invertArray([0]) // [0]
