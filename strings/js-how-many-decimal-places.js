function getDecimalPlaces(num) {
	return num.indexOf('.') === -1 ? 0 : num.split('.')[1].length
}

getDecimalPlaces("3.22") // 2
getDecimalPlaces("400") // 0
getDecimalPlaces("43.50") // 2
getDecimalPlaces("100,000,000") // 0
getDecimalPlaces("3.1415") // 4
getDecimalPlaces("0") // 0
getDecimalPlaces("01") // 0
getDecimalPlaces("00010.00010") // 5
getDecimalPlaces("3,141.592") // 3
