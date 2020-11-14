function possible_bonus(a, b) {
	return a === b || b < a ? false : (a + 6) >= b
}

possible_bonus(3, 7) // true
possible_bonus(0, 6) // true
possible_bonus(1, 6) // true
possible_bonus(2, 6) // true
possible_bonus(3, 6) // true
possible_bonus(4, 6) // true
possible_bonus(5, 6) // true
possible_bonus(6, 6) // false
possible_bonus(7, 6) // false
possible_bonus(23, 27) // true
possible_bonus(1, 9) // false
possible_bonus(5, 3) // false
