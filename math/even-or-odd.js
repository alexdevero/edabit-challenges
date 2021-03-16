function evenOrOdd(arr) {
	return arr.reduce((acc, curVal) => acc + curVal, 0) % 2 === 0 ? 'even' : 'odd'
}

evenOrOdd([0]) // 'even'
evenOrOdd([1]) // 'odd'
evenOrOdd([]) // 'even'
evenOrOdd([0, 1, 5]) // 'even'
evenOrOdd([0, 1, 3]) // 'even'
evenOrOdd([1023, 1, 2]) // 'even'
evenOrOdd([0, -1, -5]) // 'even'
evenOrOdd([0, -1, -3]) // 'even'
evenOrOdd([-1023, 1, -2]) // 'even'
evenOrOdd([0, 1, 2]) // 'odd'
evenOrOdd([0, 1, 4]) // 'odd'
evenOrOdd([1023, 1, 3]) // 'odd'
evenOrOdd([0, -1, 2]) // 'odd'
evenOrOdd([0, 1, -4]) // 'odd'
evenOrOdd([-1023, -1, 3]) // 'odd'
