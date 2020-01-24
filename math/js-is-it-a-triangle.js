function isTriangle(a, b, c) {
	return a + b > c && a + c > b && b + c > a
}

(isTriangle(4, 5, 6) // true
(isTriangle(3, 4, 6) // true
(isTriangle(2, 5, 7) // false
(isTriangle(2, 5, 9) // false
(isTriangle(2, 9, 5) // false
(isTriangle(9, 2, 5) // false
(isTriangle(11, 12, 20) // true
(isTriangle(14, 3, 12) // true
(isTriangle(23, 4, 28) // false
(isTriangle(21, 4, 25) // false
