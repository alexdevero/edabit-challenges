function automorphic(n) {
	return Math.pow(n, 2).toString().endsWith(n)
}

automorphic(1) // true
automorphic(3) // false
automorphic(6) // true
automorphic(9) // false
automorphic(25) // true
automorphic(53) // false
automorphic(76) // true
automorphic(95) // false
automorphic(625) // true
automorphic(225) // false
