function journeyDistance(num) {
	return num < 3 ? 0 : 1 + (num - 3) / 2
}

journeyDistance(0) // 0
journeyDistance(3) // 1
journeyDistance(5) // 2
journeyDistance(9) // 4
journeyDistance(15) // 7
journeyDistance(99) // 49
journeyDistance(11037) // 5518
