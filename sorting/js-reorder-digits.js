function reorderDigits(arr, direction) {
	return arr.map(num => direction === 'asc' ? parseInt(num.toString().split('').sort((x, y) => x > y ? 1 : -1).join('')) : parseInt(num.toString().split('').sort((x, y) => x > y ? -1 : 1).join('')))
}

reorderDigits([515, 341, 98, 44, 211], 'asc') // [155, 134, 89, 44, 112]
reorderDigits([515, 341, 98, 44, 211], 'desc') // [551, 431, 98, 44, 211]
reorderDigits([63251, 78221], 'asc') // [12356, 12278]
reorderDigits([63251, 78221], 'desc') // [65321, 87221]
reorderDigits([1, 2, 3, 4], 'asc') // [1, 2, 3, 4]
reorderDigits([1, 2, 3, 4], 'desc') // [1, 2, 3, 4]
reorderDigits([12, 21, 15, 51], 'asc') // [12, 12, 15, 15]
reorderDigits([12, 21, 15, 51], 'desc') // [21, 21, 51, 51]
