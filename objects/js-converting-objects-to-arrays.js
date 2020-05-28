function toArray(obj) {
	return Object.entries(obj)
}

toArray({ a: 1, b: 2 }) // [["a", 1], ["b", 2]]
toArray({ foo: 33, bar: 45, baz: 67 }) // [["foo", 33], ["bar", 45], ["baz", 67]]
toArray({ shrimp: 15, tots: 12 }) // [["shrimp", 15], ["tots", 12]]
toArray({}) // []
