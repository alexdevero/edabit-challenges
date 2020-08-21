function arrayLessThan100(arr) {
	return arr.reduce((acc, curVal) => acc + curVal, 0) < 100
}

arrayLessThan100([5, 57]) // true
arrayLessThan100([77, 30]) // false
arrayLessThan100([0, 59,15]) // true
arrayLessThan100([0]) // true
arrayLessThan100([35, 59,15]) // false
arrayLessThan100([25, 50, 25]) // false
