function weight(r, h) {
	return +((Math.PI * Math.pow(r, 2) * h) / 1000).toFixed(2)
}

weight(4, 10) // 0.5
weight(30, 60) // 169.65
weight(15, 10) // 7.07
weight(20, 40) // 50.27
weight(100, 30) // 942.48
weight(200, 300) // 37699.11
weight(15, 23) // 16.26
weight(22, 44) // 66.9
