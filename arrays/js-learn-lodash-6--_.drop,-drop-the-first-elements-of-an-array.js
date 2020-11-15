function drop(arr, val = 1) {
	return arr.slice(val)
}

drop([1, 2, 3]) // [2, 3]
drop([1, 2, 3], 2) // [3]
drop([1, 2, 3], 5) // []
drop([1, 2, 3], 0) // [1, 2, 3]
drop(["banana", "orange", "watermelon", "mango"], 2) // ["watermelon", "mango"]
drop([], 2) // []
