function ageDifference(ages) {
	const agesSorted = ages.sort((x, y) => x < y ? 1 : -1)
	const result = agesSorted[0] - agesSorted[1]

	return result === 0 ? 'No age difference between spouses.' : result === 1 ? '1 year' : result + ' years'
}

ageDifference([29, 1, 6, 8, 28]) // "1 year")
ageDifference([43, 86, 49, 86]) // "No age difference between spouses.")
ageDifference([2, 4, 6, 32, 27]) // "5 years")
ageDifference([55, 28, 25, 56, 20]) // "1 year")
ageDifference([21, 56, 69, 18]) // "13 years")
ageDifference([25, 70, 25, 26, 58]) // "12 years")
ageDifference([10, 12, 44, 9, 44]) // "No age difference between spouses.")
