const dropRight = (arr, num = 1) => {
	return arr.splice(0, arr.length - num)
}

dropRight([1, 2, 3]) // [1, 2]
dropRight([1, 2, 3], 2) // [1]
dropRight([1, 2, 3], 5) // []
dropRight([1, 2, 3], 0) // [1, 2, 3]
dropRight(["banana", "orange", "watermelon", "mango"], 2) // ["banana", "orange"]
dropRight([], 2) // []
