function isFirstSuperior(arr1, arr2) {
		return arr1.join('') > arr2.join('')
}

isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]) // true
isFirstSuperior(['a', 'b', 'c'], ['a', 'd', 'c']) // false
isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']) // false
isFirstSuperior([true, 10, 'zebra'], [true, 10, 'ant']) // true
isFirstSuperior([true, true, false, true], [true, true, true, true]) // false
isFirstSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]) // true
isFirstSuperior(['llama', 'alligator'], ['llama', 'buffalo']) // false
isFirstSuperior(['zebra', 'ostrich', 'whale'], ['ant', 'ostrich', 'whale']) // true
isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) // false
