function lineLength([x1, x2], [y1, y2]) {
	return +Math.sqrt(((x1 - y1) ** 2) + ((x2 - y2) ** 2)).toFixed(2)
}

lineLength([15, 7], [22, 11]) // 8.06
lineLength([0, 0], [0, 0]) // 0
lineLength([0, 0], [1, 1]) // 1.41
lineLength([30, 10], [13, -5]) // 22.67
