function getSumOfItems(arr) {
	return arr.reduce((acc, currVal) => currVal + acc)
}

getSumOfItems([2, 7, 4]) // 13
getSumOfItems([45, 3, 0]) // 48
getSumOfItems([-2, 84, 23]) // 105
