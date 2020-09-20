function absolute(n) {
	return n < 0 ? -n : n
}

const excludes = f => !RegExp('Math.abs').test(f)
Test.assertNotEquals(excludes(absolute), false, "A restricted function is found!")

let [numVector, resVector] = [[ -5, -3.14, 250, 0, 6.28, 11037 ], [5, 3.14, 250, 0, 6.28, 11037]]
for (let i in numVector) Test.assertEquals(absolute(numVector[i]), resVector[i])
