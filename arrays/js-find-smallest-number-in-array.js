function findSmallestNum(arr) {
	return Math.min(...arr)
}

findSmallestNum([34, 15, 88, 2]) // 2
findSmallestNum([34, -345, -1, 100]) // -345
findSmallestNum([-76, 1.345, 1, 0]) // -76
findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) // -0.9999
findSmallestNum([7, 7, 7]) // 7
findSmallestNum([4, 6, 1, 3, 4, 5, 5, 1]) // 1
findSmallestNum([-4, -6, -8, -1]) // -8
findSmallestNum([54, 76, 23, 54]) // 23
findSmallestNum([100]) // 100
findSmallestNum([0, 1, 2, 3, 4, 5]) // 0