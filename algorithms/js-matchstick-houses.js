function matchHouses(step) {
	return step === 0 ? 0 : (step * 5) + 1
}

matchHouses(1) // 6
matchHouses(0) // 0
matchHouses(17) // 86
matchHouses(36) // 181
matchHouses(15) // 76
matchHouses(99) // 496
matchHouses(3) // 16
matchHouses(87) // 436
