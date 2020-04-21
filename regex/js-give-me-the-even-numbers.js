function sumEvenNumsInRange(start, stop) {
	return Array.from(new Array(stop), (num, i) => i + 1).filter(x => x >= start && x % 2 === 0).reduce((acc, currVal) => acc + currVal, 0)
}

sumEvenNumsInRange(51, 150) // 5050
sumEvenNumsInRange(70, 100) // 1360
sumEvenNumsInRange(99, 110) // 630
sumEvenNumsInRange(63, 97) // 1360
sumEvenNumsInRange(10, 20) // 90
