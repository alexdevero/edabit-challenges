function millionsRounding(arr) {
	return arr.map(el => [el[0], +(Math.round(el[1] / 1_000_000) + '000000')])
}

const cities1 = [
	['Tokyo', 37435191],
	['Delhi', 29399141],
	['Shanghai', 26317104]
	]

	const cities2 = [
	['Sao Paulo', 21846507]
	]

	const cities3 = [
	['London', 9304016],
	['Naples', 	2186853],
	['Nice', 	942208],
	['Abu Dhabi', 1482816],
	['Riga', 	630692],
	['Vatican City', 572]
	]

Test.assertSimilar(millionsRounding(cities1), [
	['Tokyo', 37000000],
	['Delhi', 29000000],
	['Shanghai', 26000000]
	])

Test.assertSimilar(millionsRounding(cities2), [
	['Sao Paulo', 22000000]
	])

Test.assertSimilar(millionsRounding(cities3), [
	['London', 9000000],
	['Naples', 	2000000],
	['Nice', 	1000000],
	['Abu Dhabi', 1000000],
	['Riga', 	1000000],
	['Vatican City', 0]
	])

Test.assertSimilar(millionsRounding([]), [])
