function weightAllowed(car, p, maxWeight) {
	return (car + p.reduce((acc, curVal) => acc + curVal, 0)) * 0.453592 < maxWeight
}

weightAllowed(3000, [150, 201, 75, 88, 195], 1700) // true
weightAllowed(3200, [220, 101, 115, 228, 15], 1700) // false
weightAllowed(2900, [225, 171, 300, 274, 191], 1850) // true
weightAllowed(3550, [180, 201, 140, 99, 204], 1980) // false
weightAllowed(4500, [157, 154, 75, 88, 190], 2400) // true
weightAllowed(4000, [150, 200, 79, 80, 159], 2000) // false
