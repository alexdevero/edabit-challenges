const scores = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23};

function nameScore(name) {
	const result = name.split('').map(char => scores[char])
		.reduce((acc, cur) => acc + cur, 0)
	return result <= 60 ?
		'NOT TOO GOOD' : result >= 61 && result <= 300 ?
		'PRETTY GOOD' : result >= 301 && result <= 599 ?
		'VERY GOOD' : 'THE BEST'
}

nameScore('MATT') // "THE BEST"
nameScore('AIRFORCE') // "THE BEST"
nameScore('GUV') // 'NOT TOO GOOD'
nameScore('PUBG') // "NOT TOO GOOD"
nameScore('ME') // "PRETTY GOOD"
nameScore('BOB') // "PRETTY GOOD"
nameScore('JLJ') // 'PRETTY GOOD'
nameScore('YOU') // 'VERY GOOD'
nameScore('FABIO') //"VERY GOOD"
nameScore('ROBBY') // 'THE BEST'
nameScore('BILL GATES') // "THE BEST"
