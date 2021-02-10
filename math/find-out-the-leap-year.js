function leapYear(year) {
	return year % 4 === 0 && year % 100 !== 0
}

leapYear(2004) // true
leapYear(8) // true
leapYear(4) // true
leapYear(2019) // false
leapYear(1970) // false
leapYear(2021) // false
leapYear(1934) // false
leapYear(1874) // false
leapYear(1968) // true
