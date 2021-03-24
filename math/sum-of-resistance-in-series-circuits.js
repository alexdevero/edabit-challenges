function seriesResistance(arr) {
	const result = arr.reduce((acc, cur) => acc + cur, 0)
	return result <= 1 ? `${result} ohm` : `${result} ohms`
}

seriesResistance([1, 5, 6, 3]) // "15 ohms"
seriesResistance([0.2, 0.3, 0.4]) // "0.9 ohm"
seriesResistance([10,12, 1, 10]) // "33 ohms"
seriesResistance([10,13, 3.8, 20, 10]) // "56.8 ohms"
seriesResistance([0.5, 0.5]) // "1 ohm"
seriesResistance([16, 30, 22.8, 4]) // "72.8 ohms"
seriesResistance([20, 15, 32.5, 2]) // "69.5 ohms"
seriesResistance([52, 22, 20, 30]) // "124 ohms"
seriesResistance([10, 12, 32, 4.9, 5, 6, 71]) // "140.9 ohms"
