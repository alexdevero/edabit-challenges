function nothing_is_nothing() {
		return [...arguments].every(arg => arg)
}

nothing_is_nothing(0, false, [], {}) // false
nothing_is_nothing(33, 'Hello', (true, true, 3)) // true
nothing_is_nothing(true, null) // false
nothing_is_nothing(null, null) // false
nothing_is_nothing(221) // true
nothing_is_nothing(221, 0, 0, 0) // false
nothing_is_nothing([221, 0, 0, 0]) // true
