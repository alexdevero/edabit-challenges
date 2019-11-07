function volPizza(radius, height) {
	return Math.round((radius ** 2) * height * Math.PI)
}

volPizza(1, 1) // 3, "Example #1"
volPizza(7, 2) // 308, "Example #2"
volPizza(10, 2) // 785, "Example #3"
volPizza(15, 1.3) // 919
volPizza(20, 1) // 1257
volPizza(13, 2) // 1062
