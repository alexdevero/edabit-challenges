function secondLargest(arr) {
	return arr.sort((x, y) => x < y ? 1 : -1)[1]
}

secondLargest([10, 40, 30, 20, 50]) // 40
secondLargest([25, 143, 89, 13, 105]) // 105
secondLargest([54, 23, 11, 17, 10]) // 23
secondLargest([513, 211, 131, 417, 11]) // 417
secondLargest([63, 44, 11, 22, 33, 66, 65]) // 65
