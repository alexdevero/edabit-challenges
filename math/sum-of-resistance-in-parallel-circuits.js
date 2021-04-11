function parallelResistance(arr) {
	return +(1 / arr.reduce((acc, curr) => acc + (1 / curr), 0)).toFixed(1)
}

parallelResistance([6, 3]) // 2
parallelResistance([6, 3, 6]) // 1.5
parallelResistance([10, 10]) // 5
parallelResistance([10, 20, 10]) // 4
parallelResistance([60, 30, 20]) // 10
parallelResistance([16, 4]) // 3.2
parallelResistance([20, 5]) // 4
parallelResistance([500, 500, 500]) // 166.7
parallelResistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 0.3
