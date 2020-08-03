function largestSwap(num) {
	return num / 10 > num % 10
}

largestSwap(27) // false, '27 < 72, so not largest swap.'
largestSwap(43) // true, '43 > 34, so largest swap.'
largestSwap(14) // false, '14 < 41, so not largest swap.'
largestSwap(53) // true, '53 > 35, so largest swap.'
largestSwap(99) // true, 'Cannot do better, so largest swap.'
