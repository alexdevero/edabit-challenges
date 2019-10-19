function nthSmallest(arr, n) {
	return n > arr.length ? null : arr.sort()[n - 1]
}

nthSmallest([1, 3, 5, 7], 1) // 1
nthSmallest([1, 3, 5, 7], 3) // 5
nthSmallest([1, 3, 5, 7], 5) // null
nthSmallest([7, 3, 5, 1], 2) // 3
nthSmallest([5, 4, 3, 2, 1, -3], 1) // -3
nthSmallest([5, 4, 3, 2, 1, -3], 5) // 4
nthSmallest([4, 5], 3) // null
nthSmallest([4, 5], 2) // 5
nthSmallest([4, 5], 1) // 4
