function checkSquareAndCube(arr) {
	return Math.sqrt(arr[0]) === Math.cbrt(arr[1])
}

checkSquareAndCube([4, 8]) // true
checkSquareAndCube([5, 12]) // false
checkSquareAndCube([9, 27]) // true
checkSquareAndCube([25, 120]) // false
checkSquareAndCube([25, 125]) // true
checkSquareAndCube([36, 215]) // false
checkSquareAndCube([36, 217]) // false
checkSquareAndCube([144, 1728]) // true
checkSquareAndCube([1, 1]) // true
checkSquareAndCube([676, 17576]) // true
