function isEqual(num1, num2) {
	return typeof num1 === 'string' || typeof num2 === 'string'? false : num1 === num2
}

isEqual(2, 2) // true
isEqual('1', 5) // false
isEqual(88, 88) // true
isEqual(36, 35) // false
isEqual('1', 1) // false
isEqual(1, 1) // true
isEqual(5, 6) // false
isEqual('1', '1') // false
