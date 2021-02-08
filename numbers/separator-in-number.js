function addSep(s) {
	return Number(s).toLocaleString()
}

addSep("1000") // "1,000"
addSep("10009") // "10,009"
addSep("1000000") // "1,000,000"
addSep("10000000000") // "10,000,000,000"
addSep("1999000") // "1,999,000"
addSep("100") // "100"
addSep("1") // "1"
addSep("10") // "10"
addSep("69000000000000") // "69,000,000,000,000"
addSep("9999") // "9,999"
addSep("9999") // "9,999"
addSep("999999") // "999,999"
