function integerBoolean(n) {
	return n.split('').map(int => int === '0' ? false : true)
}

integerBoolean("100101") // [true, false, false, true, false, true]
integerBoolean("10") // [true, false]
integerBoolean("001") // [false, false, true]
integerBoolean("") // []
integerBoolean("111") // [true, true, true]
integerBoolean("000") // [false, false, false]
integerBoolean("10010110") // [true, false, false, true, false, true, true, false]
