function removeEmptyArrays(arr) {
	return arr.filter(x => x.length !== 0 ? 1 : 0)
}

removeEmptyArrays(['a', 'b', []]) // ['a', 'b']
removeEmptyArrays([1, 2, [], 4]) // [1, 2, 4]
removeEmptyArrays([[], [], [] // []]), []
removeEmptyArrays([1, 2, 3, 4]) // [1, 2, 3, 4]
removeEmptyArrays([1, [], [], 4]) // [1, 4]