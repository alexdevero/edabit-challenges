function rootDigit(n) {
	const num = ('' + n).split('').map(n => parseInt(n)).reduce((acc, curVal) => acc + curVal, 0)
	return String(num).length > 1 ? rootDigit(num) : num
}

rootDigit(999888777) // 9
rootDigit(1111177999888777999888777999888777n) // 1
rootDigit(1238763636555555555555n) // 6
rootDigit(1238222222222222222263612387636361238763636n) // 7
rootDigit(0) // 0
