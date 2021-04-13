function countOnes(i) {
	return (i >>> 0).toString(2).replace(/0/g, '').length;
}

countOnes(12) // 2
countOnes(0) // 0
countOnes(100) // 3
countOnes(101) // 4
countOnes(999) // 8
countOnes(1e9) // 13
countOnes(123456789) // 16
countOnes(1234567890) // 12
