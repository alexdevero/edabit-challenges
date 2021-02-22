function lonelyInteger(arr) {
	return arr.filter(a => !arr.includes(-a))[0]
}

lonelyInteger([1, -1, 2, -2, 3]) // 3
lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) // -4
lonelyInteger([1, -1, 2, -2, 3, 3]) // 3
lonelyInteger([-110, 110, -38, -38, -62, 62, -38, -38, -38]) // -38
lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) // -9
