function swap(a, b){
	[a, b] = [b, a]

	return [a, b]
}

swap(100, 200) // [200, 100]
swap(44, 33) // [33, 44]
swap(21, 12) // [12, 21]
swap(10, 20) // [20, 10]
