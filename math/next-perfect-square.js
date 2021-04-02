function nextSquare(n) {
	return Math.sqrt(n) % 1 ? null : Math.pow(Math.sqrt(n) + 1, 2)
}

nextSquare(121) // 144, "Wrong output for 121"
nextSquare(625) // 676, "Wrong output for 625"
nextSquare(319225) // 320356, "Wrong output for 319225"
nextSquare(15241383936) // 15241630849, "Wrong output for 15241383936"
nextSquare(155) // null, "Wrong output for 155"
nextSquare(342786627) // null, "Wrong output for 342786627"
