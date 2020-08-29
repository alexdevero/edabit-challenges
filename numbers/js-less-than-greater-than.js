function arrBetween(num1, num2, arr) {
	return arr.filter(x => x > num1 && x < num2)
}

arrBetween(7, 32, [1,2,3,78]) // []
arrBetween(0, 9, [1,2,3,78]) // [1,2,3]
arrBetween(-5, 3, [-8,0,0,20,-3]) // [0,0,-3]
arrBetween(1, 1, [1,0,3,7]) // []
arrBetween(0, 310, [1,-2,300,78765, 100,99,98,234]) // [1,300,100,99,98,234]
