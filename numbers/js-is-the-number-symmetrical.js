function isSymmetrical(num) {
	return num === Number(num.toString().split('').reverse().join(''))
}

isSymmetrical(23) // false
isSymmetrical(9562) // false
isSymmetrical(10019) // false
isSymmetrical(1) // true
isSymmetrical(3223) // true
isSymmetrical(95559) // true
isSymmetrical(66566) // true
