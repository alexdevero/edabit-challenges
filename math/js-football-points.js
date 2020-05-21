function footballPoints(wins, draws, losses) {
	return (wins * 3) + (draws * 1)
}

footballPoints(1, 2, 3) // 5
footballPoints(5, 5, 5) // 20
footballPoints(1, 0, 0) // 3
footballPoints(0, 7, 0) // 7
footballPoints(0, 0, 15) // 0
