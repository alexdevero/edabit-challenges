function mubashirFunction(a, b) {
	return a >= 10 || b >= 10 ?
		('' + a).split('').reduce((acc, cur) => acc + (+cur), 0) * ('' + b).split('').reduce((acc, cur) => acc + (+cur), 0)
	: a * b
}

mubashirFunction(0, 1) // 0

mubashirFunction(1, 2) // 2

mubashirFunction(5, 6) // 30

mubashirFunction(10, 10) // 1

mubashirFunction(200, 200) // 4

mubashirFunction(12, 34) // 21

mubashirFunction(123, 45) // 54
