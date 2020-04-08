function catchZeroDivision(expr) {
	return !isFinite(eval(expr))
}

catchZeroDivision("2 / 0") // true
catchZeroDivision("4 / (2 + 3 - 5)") // true
catchZeroDivision("2 * 5 - 3") // false
catchZeroDivision("3 / 0") // true
catchZeroDivision("23 - 23 / 23") // false
catchZeroDivision("0 + 1 + 2 + 3 + 0") // false
catchZeroDivision("0+0+0+0+0+0+0") // false
catchZeroDivision("0-0-0-0-0-0-0-0-0-0") // false
catchZeroDivision("4 / 3") // false
catchZeroDivision("5343456787543234567 / 743044830483009043909003") // false
catchZeroDivision("0 / 0") // true
catchZeroDivision("(-100 + 50 + 50) / (60 - 50 - 10)") // true
catchZeroDivision("0 + 0 + (3 / (3 - 3))") // true
catchZeroDivision("7 / ((7**2) - ((-7)**2))") // true
