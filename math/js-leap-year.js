function isLeap(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

isLeap(2020) // true
isLeap(1800) // false
isLeap(2000) // true
isLeap(2019) // false
isLeap(1452) // true
isLeap(1998) // false
isLeap(1904) // true
isLeap(1985) // false
isLeap(2048) // true
isLeap(1600) // true
