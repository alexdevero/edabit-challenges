function acceptIntoMovie(age, isSupervised) {
	return age >= 15 || isSupervised
}

acceptIntoMovie(14, true) // true
acceptIntoMovie(15, true) // true
acceptIntoMovie(16, true) // true
acceptIntoMovie(14, false) // false
acceptIntoMovie(15, false) // true
acceptIntoMovie(16, false) // true
acceptIntoMovie(14.99999, true) // true
acceptIntoMovie(14.99999, false) // false
