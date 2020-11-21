function operation(a, b, op) {
	const ops = {
		add: '+',
		subtract: '-',
		divide: '/',
		multiply: '*'
	}

	return parseInt(b) === 0 && op === 'divide' ? 'undefined' : eval(`${a} ${ops[op]} ${b}`)
}

let [actualParam, expected] = [
  [
    ["1", "2", "add"],
    ["1", "-20", "add"],
    ["9", "0", "divide"],
    ["10", "10", "multiply"],
    ["-10", "-10", "multiply"],
    ["10", "10", "subtract"],
    ["0", "0", "subtract"],
    ["0", "1", "divide"],
    ["0", "25415", "divide"]
  ],
  [3, -19, "undefined", 100, 100, 0, 0, 0, 0]
]
for (let i in actualParam) Test.assertEquals(operation(...actualParam[i]), expected[i])
Test.assertEquals(operation(operation("10", "10", "multiply"), operation("10", "10", "add"), "divide"), 5)
