function calculator(num1, operator, num2) {
	return operator === '/' && num2 === 0 ? 'Can\'t divide by 0!' : eval(`${num1}${operator}${num2}`)
}

calculator(2, '/', 2) // 1
calculator(10, '-', 7) // 3
calculator(2, '*', 16) // 32
calculator(2, '-', 2) // 0
calculator(15, '+', 26) // 41
calculator(2, '+', 2) // 4
calculator(2, "/", 0) // "Can't divide by 0!"
