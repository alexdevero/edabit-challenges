function getSequence(low, high) {
	return new Array(high - low + 1).fill(0).map((el, i) => i + low)
}

getSequence(1, 5) // [1, 2, 3, 4, 5], "Example #1"
getSequence(98, 100) // [98, 99, 100], "Example #2"
getSequence(1000, 1000) // [1000], "Example #3"
getSequence(1450, 1460) // [1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460]
getSequence(0, 3) // [0, 1, 2, 3]
getSequence(-10, 1) // [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0,  1]
getSequence(-100, -100) // [-100]
