function howManyWalls(n, w, h) {
	return Math.floor(n / (w * h))
}

howManyWalls(100, 4, 5) // 5
howManyWalls(10, 15, 12) // 0
howManyWalls(41, 3, 6) // 2
howManyWalls(50, 11, 5) // 0
howManyWalls(1, 1, 1) // 1
