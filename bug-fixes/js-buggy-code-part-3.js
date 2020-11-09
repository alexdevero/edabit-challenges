function sumArray(arr) {
	var sum = 0
  for (i = 0; i < arr.length; i++) {
	  sum += arr[i]
	}

  return sum
}

sumArray([1, 2, 3, 4, 5]) // 15
sumArray([-1, 0, 1]) // 0
sumArray([0, 4, 8, 12]) // 24
