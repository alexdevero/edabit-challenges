function convertDate(date) {
	const formattedDate = new Date(date)
	return [formattedDate.getMonth() + 1, formattedDate.getDate(), formattedDate.getFullYear()]
}

convertDate("January 9, 2019") // [1, 9, 2019]
convertDate("Jan 9, 2019") // [1, 9, 2019]
convertDate("01/09/2019") // [1, 9, 2019]
convertDate("01-09-2019") // [1, 9, 2019]
convertDate("01.09.2019") // [1, 9, 2019]
convertDate("March 3, 1901") // [3, 3, 1901]
convertDate("Mar 3, 1901") // [3, 3, 1901]
convertDate("03/03/1901") // [3, 3, 1901]
convertDate("03-03-1901") // [3, 3, 1901]
convertDate("03.03.1901") // [3, 3, 1901]
convertDate("August 8, 1666") // [8, 8, 1666]
convertDate("Nov 13, 1533") // [11, 13, 1533]
convertDate("04/15/1789") // [4, 15, 1789]
convertDate("12-23-1111") // [12, 23, 1111]
convertDate("02.28.1832") // [2, 28, 1832]