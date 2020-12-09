function valueAt(arr,i){
  return arr[Math.floor(eval(i))]
}

valueAt([1, 2, 3, 4, 5, 6], 10 / 2) // 6
valueAt([1, 2, 3, 4], 6.535355314 / 2) // 4
valueAt([1, 2], 1.0 / 2) // 1
valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) // 5
