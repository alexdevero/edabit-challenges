function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i]++
	}

	return arr
}

Test.assertSimilar(incrementItems([0, 1, 2, 3]), [1, 2, 3, 4])
Test.assertSimilar(incrementItems([2, 4, 6, 8]), [3, 5, 7, 9])
Test.assertSimilar(incrementItems([-1, -2, -3, -4]), [0, -1, -2, -3])
