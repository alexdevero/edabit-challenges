function getNumberOfApples(n, p) {
	return n === 0 || p === '100%' ? "The children didn't get any apples" : Math.floor(((100 - +p.replace('%', '')) / 100) * n)
}

getNumberOfApples(10, '90%') // 1
getNumberOfApples(25, '10%') // 22
getNumberOfApples(0, '10%') // "The children didn't get any apples"
getNumberOfApples(40, '30%') // 28
getNumberOfApples(10, '44%') // 5
getNumberOfApples(12, '100%') // "The children didn't get any apples"
getNumberOfApples(40, '100%') // "The children didn't get any apples"
