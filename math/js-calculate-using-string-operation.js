function calculate(num1, num2, op) {
	return eval(`${num1} ${op} ${num2}`)
}

calculate(24,100, "-") // -76
calculate(-20,-30, "+") // -50
calculate(1500,5, "/") // 300
calculate(38,3, "*") // 114
calculate(49,5, "%") // 4
