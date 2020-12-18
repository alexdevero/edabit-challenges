function operate(num1, num2, operator) {
	return eval(`${num1} ${operator} ${num2}`)
}

operate(1, 1, "+") // 2
operate(1, 1, "-") // 0
operate(1, 1, "*") // 1
operate(1, 1, "/") // 1
operate(1, 1, "%") // 0
operate(2, 1, "+") // 3
operate(2, 1, "-") // 1
operate(2, 1, "*") // 2
operate(2, 1, "/") // 2
operate(2, 1, "%") // 0
