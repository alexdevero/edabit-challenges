function equal(a, b, c) {
	return new Set([a, b, c]).size === 3 ? 0 : 3 - new Set([a, b, c]).size + 1
}

equal(2,3,4) // 0, "All values are differents"
equal(7,3,7) // 2, "Two values are equal"
equal(4,4,4) // 3, "All 3 values are equal"
equal(7,3,4) // 0, "All values are differents"
equal(3,3,6) // 2, "Two values are equal"
equal(1,1,1) // 3, "All 3 values are equal"
equal(1,7,6) // 0, "All values are differents"
equal(7, 7, 7) // 3, "All 3 values are equal"
