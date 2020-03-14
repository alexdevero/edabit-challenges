function mean(arr) {
	return parseFloat((arr.reduce((acc, curVal) => acc + curVal) / arr.length).toFixed(2))
}

(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])) // 2.55
(mean([324, 543, 654, 9876])) // 2849.25
(mean([0, 0, 0, 0])) // 0.00
(mean([30, 40, 20, 100, 30])) // 44.00
(mean([1, 1, 1, 0])) // 0.75
(mean([1, 1, 0, 1, 2, 1, 1, 1, 0, 0])) // 0.80
(mean([10000])) // 10000.00
