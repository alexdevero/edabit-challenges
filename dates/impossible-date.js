function isValidDate(d, m, y) {
	return new Date(y, m - 1, d).getMonth() === m - 1
}

isValidDate(35, 2, 2020) // false
isValidDate(8, 3, 2020) // true
isValidDate(31, 6, 1980) // false
isValidDate(27, 9, 1822) // true
isValidDate(34, 7, 2008) // false
isValidDate(32, 12, 1932) // false
isValidDate(20, 3, 2019) // true
isValidDate(28, 3, 2004) // true
isValidDate(22, 5, 1962) // true
isValidDate(21, 11, 1875) // true
isValidDate(6, 12, 1982) // true
isValidDate(6, 10, 1873) // true
isValidDate(5, 6, 1852) // true
isValidDate(21, 4, 1809) // true
isValidDate(6, 15, 1969) // false
isValidDate(6, 7, 1893) // true