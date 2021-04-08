function measureDepth(arr) {
	return JSON.stringify(arr).indexOf(']')
}

measureDepth([]) // 1
measureDepth([[]]) // 2
measureDepth([[[]]]) // 3
measureDepth([[[[[[]]]]]]) // 6
measureDepth([[[[[[[[]]]]]]]]) // 8
measureDepth([[[[[[[[[[[[[]]]]]]]]]]]]]) // 13
measureDepth([[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]) // 17
measureDepth([[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]) // 18
