function rotateByOne(arr) {
	return [arr.pop()].concat(arr)
}

rotateByOne([1,2,3,4,5]) // [5, 1, 2, 3, 4]
rotateByOne([6,5,8,9,7]) // [7, 6, 5, 8, 9]
rotateByOne([20,15,26,8,4]) // [4, 20, 15, 26, 8]
rotateByOne([7,8,6,4,5]) // [5, 7, 8, 6, 4]
rotateByOne([5,9,45,1,2]) // [2, 5, 9, 45, 1]
