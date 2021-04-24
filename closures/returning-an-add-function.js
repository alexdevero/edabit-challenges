function add(x) {
	return function(y) {
		return x + y
	}
}

add(20)(10) // 30
add(30)(10) // 40
add(100)(100) // 200
add(-30)(80) // 50
add(-10)(-10) // -20
