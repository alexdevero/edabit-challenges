function printArray(number) {
  return Array.from(new Array(number), (el, i) => i + 1)
}

printArray(1) // [1]
printArray(2) // [1,2]
printArray(3) // [1,2,3]
printArray(4) // [1,2,3,4]
printArray(5) // [1,2,3,4,5]
printArray(6) // [1,2,3,4,5,6]
printArray(7) // [1,2,3,4,5,6,7]
printArray(8) // [1,2,3,4,5,6,7,8]
printArray(9) // [1,2,3,4,5,6,7,8,9]
printArray(10) // [1,2,3,4,5,6,7,8,9,10]
