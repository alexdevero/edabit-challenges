function isNarcissistic(n) {
	const sum = n.toString()
		.split('')
		.reduce((acc, cur, i, arr) => acc + (cur === 0 ? 0 : Math.pow(cur, arr.length)), 0)

	return sum === n
}

isNarcissistic(1) // true, "1 is narcissistic"
isNarcissistic(5) // true, "5 is narcissistic"
isNarcissistic(7) // true, "7 is narcissistic"
isNarcissistic(153) // true, "153 is narcissistic"
isNarcissistic(370) // true, "370 is narcissistic"
isNarcissistic(371) // true, "371 is narcissistic"
isNarcissistic(1634) // true, "1634 is narcissistic"
isNarcissistic(9004) // false
isNarcissistic(2546) // false
isNarcissistic(2124) // false
isNarcissistic(8345) // false
