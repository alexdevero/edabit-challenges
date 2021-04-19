function chessBoard(pole) {
	return (pole.charCodeAt(0) + pole[1]) % 2 === 0 ? 'black' : 'white'
}

chessBoard('a1') // 'black'
chessBoard('e5') // 'black'
chessBoard('d1') // 'white'
chessBoard('c7') // 'black'
chessBoard('h5') // 'white'
chessBoard('g2') // 'white'
chessBoard('b3') // 'white'
chessBoard('f6') // 'black'
chessBoard('g5') // 'black'
