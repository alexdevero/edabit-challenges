function centuryFromYear(year) {
	return Math.ceil(year / 100)
}

centuryFromYear(2020) // 21
centuryFromYear(200) // 2
centuryFromYear(2005) // 21
centuryFromYear(1700) // 17
centuryFromYear(1705) // 18
