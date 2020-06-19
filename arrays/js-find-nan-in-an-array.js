function findNaN(number) {
	return number.findIndex((x) => isNaN(x))
}

findNaN([1, 2, NaN, 3]) // 2
findNaN([1, 2, 3, NaN, 3, 4, 5, 3]) // 3
findNaN([1, 2, 3, 4 ,5]) // -1
findNaN([NaN, 2, 3, 4]) // 0
findNaN([1, 2, 3]) // -1
