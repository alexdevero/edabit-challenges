function deNest(arr) {
	return JSON.parse(JSON.stringify(arr).replace(/\[|\]/g, ''))
}

deNest([[[[[[[[[[[[3]]]]]]]]]]]]) // 3
deNest([[[[[[[true]]]]]]]) // true
deNest([[[[[[[[[[[[[[[[['edabit']]]]]]]]]]]]]]]]]) // 'edabit'
deNest([1]) // 1
deNest([[[[[[[4.3]]]]]]]) // 4.3
deNest([[[[[false]]]]]) // false
deNest([['sixty']]) // 'sixty'
