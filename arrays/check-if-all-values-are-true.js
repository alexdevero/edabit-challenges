function allTruthy(...args) {
	return [...args].every(Boolean)
}

const tests = [
	[[true, true, true], true],
	[[false], false],
	[[true], true],
	[[false, true, true, true, 20], false],
	[[Infinity, 92347238467.219378, 'Hello World'], true],
	[[Infinity, 92347238467.219378, 'Hello World', 0], false],
	[['', 'r', 'ra', 'rac', 'race'], false],
	[[+'Hi!'], false],
	[[{}.twice], false],
	[[true, 32, Number, [][1]], false],
	[[Boolean, Number, Object, String], true],
];

tests.forEach(([a, e]) => Test.assertEquals(allTruthy(...a), e))
