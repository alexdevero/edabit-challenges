function sortByLength(arr) {
	return arr.sort((x, y) => x.length - y.length)
}

sortByLength(["a", "ccc", "dddd", "bb"]) // ["a", "bb", "ccc", "dddd"]
sortByLength(["apple", "pie", "shortcake"]) // ["pie", "apple", "shortcake"]
sortByLength(["may", "april", "september", "august"]) // ["may", "april", "august", "september"]
sortByLength(["maybe"]) // ["maybe"]
sortByLength([]) // []
