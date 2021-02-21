function sine(x, y) {
	return +(x * Math.sin(((y * Math.PI) / 180))).toFixed(2)
}

function cosine(x, y) {
	return +(x * Math.cos(((y * Math.PI) / 180))).toFixed(2)
}

function tangent(x, y) {
	return +(x * Math.tan(((y * Math.PI) / 180))).toFixed(2)
}

// Sine
sine(8, 27) // 3.63
sine(5, 22) // 1.87
sine(8, 27) // 3.63
sine(18, 61) // 15.74
sine(22, 1) // 0.38
sine(11, 38) // 6.77

// Cosine
cosine(10, 4) // 9.98
cosine(13, 42) // 9.66
cosine(8, 97) // -0.97
cosine(38, 71) // 12.37
cosine(89, 14) // 86.36
cosine(17, 58) // 9.01

// Tangent
tangent(4, 39) // 3.24
tangent(16, 102) // -75.27
tangent(11, 5) // 0.96
tangent(21, 42) // 18.91
tangent(10, 8) // 1.41
tangent(18, 68) // 44.55
