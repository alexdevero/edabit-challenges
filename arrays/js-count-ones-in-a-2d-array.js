function countOnes(matrix) {
	return matrix.flat().filter(x => x === 1).length
}

countOnes([
	[1, 0, 1],
	[0, 0, 0],
	[0, 0, 1]
]) // 3

countOnes([
	[1, 1, 1],
	[0, 0, 1],
	[1, 1, 1]
]) // 7

countOnes([
	[1, 2, 3],
	[0, 2, 1],
	[5, 7, 33]
]) // 2

countOnes([
	[5, 2, 3],
	[0, 2, 5],
	[5, 7, 33]
]) // 0

countOnes([
	[5, 2],
	[0, 2],
	[5, 1]
]) // 1

countOnes([
	[1, 1],
	[0, 1]
]) // 3

countOnes([
	[0, 1],
	[0, 0]
]) // 1
