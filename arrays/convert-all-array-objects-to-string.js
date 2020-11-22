function ParseArray(arr) {
	return JSON.stringify(arr)
}

ParseArray([1, 2, "a", "b"]) // JSON.stringify([1, 2, "a", "b"])
ParseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) // JSON.stringify([1, 2, 3, 17, 24, 3, "a", "123b"])
ParseArray(["abc", 123, "def", 456]) // JSON.stringify(["abc", 123, "def", 456])
ParseArray([]) // JSON.stringify([])
