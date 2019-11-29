function keysAndValues(obj) {
	return [Object.keys(obj), Object.values(obj)]
}

keysAndValues({a: 1, b: 2, c: 3}) // [["a", "b", "c"], [1, 2, 3]]
keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}) // [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({key1: true, key2: false, key3: undefined}) // [["key1", "key2", "key3"], [true, false, undefined]]
keysAndValues({1: null, 2: null, 3: null}) // [["1", "2", "3"], [null, null, null]]
keysAndValues({key1: "cat", key2: "dog", key3: null}) // [["key1", "key2", "key3"], ["cat", "dog", null]]
