function sumCubes(n) {
	return Array.from({ length: n }, (el, i) => (i + 1) ** 3)
		.reduce((acc, curVal) => acc + curVal)
}

sumCubes(1) // 1
sumCubes(2) // 9
sumCubes(3) // 36
sumCubes(4) // 100
sumCubes(5) // 225
sumCubes(6) // 441
sumCubes(7) // 784
sumCubes(8) // 1296
sumCubes(9) // 2025
sumCubes(10) // 3025
sumCubes(123) // 58155876
sumCubes(125) // 62015625
sumCubes(133) // 79405921
sumCubes(167) // 196784784
sumCubes(188) // 315630756
sumCubes(199) // 396010000
sumCubes(200) // 404010000
sumCubes(300) // 2038522500
sumCubes(400) // 6432040000
sumCubes(500) // 15687562500
sumCubes(12345) // 5807306426319225
