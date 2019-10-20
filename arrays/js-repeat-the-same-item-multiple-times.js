function repeat(item, times) {
	return new Array(times).fill(item)
}

repeat('edabit', 3) // ['edabit', 'edabit', 'edabit']
repeat(13, 5) // [13, 13, 13, 13, 13]
repeat('7', 2) //  ['7', '7']
repeat('2 0 1 8', 1) // ['2 0 1 8']
repeat('tom dick and harry', 6) // ['tom dick and harry', 'tom dick and harry', 'tom dick and harry', 'tom dick and harry', 'tom dick and harry', 'tom dick and harry']
repeat(0, 1) // [0]
repeat(0, 0) // []
repeat('z', 0) // []
