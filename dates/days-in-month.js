function days(month, year) {
	return new Date(year, month, 0).getDate()
}

days(1, 2018) // 31, 'Should show the correct day amount for January'
days(2, 2018) // 28, 'Should show the correct day amount for February on a non-leap year'
days(3, 2018) // 31, 'Should show the correct day amount for March'
days(4, 2018) // 30, 'Should show the correct day amount for April'
days(5, 2018) // 31, 'Should show the correct day amount for May'
days(6, 2018) // 30, 'Should show the correct day amount for June'
days(7, 2018) // 31, 'Should show the correct day amount for July'
days(8, 2018) // 31, 'Should show the correct day amount for August'
days(9, 2018) // 30, 'Should show the correct day amount for September'
days(10, 2018) // 31, 'Should show the correct day amount for October'
days(11, 2018) // 30, 'Should show the correct day amount for November'
days(12, 2018) // 31, 'Should show the correct day amount for December'
days(2, 2004) // 29, 'Should show the correct day amount for February on a leap year that is divisible by 4 but not 100'
days(2, 1800) // 28, 'Should show the correct day amount for February on a leap year that is divisible by 100 but not 400 '
days(2, 1600) // 29, 'Should show the correct day amount for February on a leap year that is divisible by 100 and 400'
