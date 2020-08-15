function marathonDistance(d) {
	return d.reduce((acc, curVal) => acc + Math.abs(curVal), 0) === 25
}

marathonDistance([1, 2, 3, 4]) // false
marathonDistance([-6, 15, 4]) // true
marathonDistance([1, 9, 5, 8, 2]) // true
marathonDistance([9, 7, 6, 5]) // false
marathonDistance([4, 6, 8, 9, -4]) // false
marathonDistance([-20, 9, -10, -11]) // false
marathonDistance([-9, 15, 1]) // true
marathonDistance([]) // false
marathonDistance([]) // false
