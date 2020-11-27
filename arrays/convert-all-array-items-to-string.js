function parseArray(arr) {
	return arr.map(el => el.toString())
}

parseArray([1, 2, "a", "b"]) // ['1', '2', "a", "b"]
parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) // ['1', '2', '3', '17', '24', '3', 'a', '123b']
parseArray(["abc", 123, "def", 456]) // ['abc', '123', 'def', '456']
parseArray([]) // []
