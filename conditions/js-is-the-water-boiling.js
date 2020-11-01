function isBoiling(temp) {
	return (temp >= '100C' || temp >= '212F') ? true : false
}

isBoiling("212F") // true
isBoiling("100C") // true
isBoiling("0F") // false
isBoiling("-1F") // false
isBoiling("213F") // true
isBoiling("104C") // true
isBoiling("-10F") // false
