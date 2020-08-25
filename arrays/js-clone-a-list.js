function clone(arr) {
	return [...arr, arr]
}

clone([1, 2, 3]) // [1, 2, 3, [1, 2, 3]], "Example #1"
clone(["x", "y"]) // ["x", "y", ["x", "y"]], "Example #2"
clone([1, 1]) // [1, 1, [1, 1]]
clone(["a", "b", "c"]) // ["a", "b", "c", ["a", "b", "c"]]
clone([]) // [[]]
