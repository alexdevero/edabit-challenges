function areaShape(base, height, shape) {
	return (shape === 'parallelogram' ? 1 : 0.5) * base * height
}

areaShape(2, 3, "triangle") // 3
areaShape(8, 6, "parallelogram") // 48
areaShape(0, 1, "triangle") // 0
areaShape(2.9, 1.3, "parallelogram") // 3.77
areaShape(0.01, 5, "triangle") // 0.025
