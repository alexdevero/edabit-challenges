function NOT(n) {
	return +!n
}

function AND(a, b) {
	return a & b
}

function OR(a, b) {
	return a | b
}

AND(1, 1) // 1
OR(1, 1) // 1
AND(0, 1) // 0
AND(0, 0) // 0
OR(0, 1) // 1
OR(1, 0) // 1
OR(0, 0) // 0
NOT(0) // 1
AND(1, 0) // 0
NOT(1) // 0
