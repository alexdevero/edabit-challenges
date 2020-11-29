function makeRug(m, n, s = '#') {
	const arr = []

	for (let i = 0; i < m; i++) {
		arr.push(s.repeat(n))
	}

	return arr
}

Test.assertSimilar(makeRug(3, 5), [
	"#####",
	"#####",
	"#####"
])

Test.assertSimilar(makeRug(3, 5, '$'), [
	"$$$$$",
	"$$$$$",
	"$$$$$"
])

Test.assertSimilar(makeRug(2, 2, 'A'), [
	"AA",
	"AA"
])

Test.assertSimilar(makeRug(2, 1, 'bcb'), [
	"bcb",
	"bcb"
])
