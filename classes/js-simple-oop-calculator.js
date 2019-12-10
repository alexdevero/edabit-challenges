class Calculator {
	add(num1, num2) {
		return num1 + num2
	}

	subtract(num1, num2) {
		return num1 - num2
	}

	multiply(num1, num2) {
		return num1 * num2
	}

	divide(num1, num2) {
		return num1 / num2
	}
}

var calculator = new Calculator()
calculator.add(5,5) // 10, "5 + 5 = 10"
calculator.add(20,5) // 25, "20 + 5 = 25"
calculator.subtract(30,5) // 25, "30 - 5 = 25"
calculator.subtract(100,5) // 95, "100 - 5 = 95"
calculator.multiply(5,5) // 25, "5 * 5 = 25"
calculator.multiply(100,5) // 500, "100 * 5 = 500"
calculator.divide(10,5) // 2, "10 / 5 = 2"
calculator.divide(100,5) // 20, "100 / 5 = 20"
