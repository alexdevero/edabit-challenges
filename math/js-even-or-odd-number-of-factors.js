function factorGroup(num) {
	return Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even'
}

factorGroup(33) // "even"
factorGroup(36) // "odd"
factorGroup(7) // "even"
factorGroup(1) // "odd"
factorGroup(19) // "even"
factorGroup(27) // "even"
factorGroup(100) // "odd"
factorGroup(18) // "even"
factorGroup(16) // "odd"
