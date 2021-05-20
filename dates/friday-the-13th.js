function hasFriday13(month, year) {
	return new Date(month + '/13/' + year).getDay() == 5
}

hasFriday13(3, 2020) // true
hasFriday13(10, 2017) // true
hasFriday13(1, 1985) // false
hasFriday13(5, 1619) // false
hasFriday13(6, 1614) // true
hasFriday13(8, 1767) // false
hasFriday13(6, 1589) // false
hasFriday13(2, 2015) // true
hasFriday13(3, 2015) // true
hasFriday13(11, 2015) // true
hasFriday13(2, 1759) // false
hasFriday13(8, 1612) // false
hasFriday13(8, 1612) // false
hasFriday13(10, 2029) // false