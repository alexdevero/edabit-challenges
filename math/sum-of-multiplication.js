function multiSum(num, ten=10) {
	return Array.from(new Array(ten), (el, i) => (i + 1) * num)
		.reduce((acc, curVal) => acc + curVal, 0)
}

multiSum(1) // 55
multiSum(2) // 110
multiSum(3) // 165
multiSum(4) // 220
multiSum(5) // 275
multiSum(6) // 330
multiSum(7) // 385
multiSum(8) // 440
multiSum(9) // 495
multiSum(10) // 550
