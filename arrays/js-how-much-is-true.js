function countTrue(arr) {
	 return arr.filter(Boolean).length
}

countTrue([true, false, false, true, false]) // 2
countTrue([false, false, false, false]) // 0
countTrue([]) // 0
countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]) // 8
countTrue([true, false, true, true, false, false, false, false, false]) // 3
countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]) // 8
countTrue([true, false, true, true, true, false, true, true, false, false]) // 6
countTrue([false, false, false, false, true, false, true, false, true, false, false]) // 3
countTrue([true, false, false, false, true, false, false, true, false, false, false]) // 3
countTrue([true, true, false, true, false, false, false, false, true, false]) // 4
countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]) // 9
countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]) // 8
countTrue([true, true, false, false, false, false, true, false, true, true, false, true]) // 6
