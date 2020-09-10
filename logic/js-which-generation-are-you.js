function generation(x, y) {
	const data = {
		'-3': {
			m: 'great grandfather',
			f: 'great grandmother'
		},
		'-2': {
			m: 'grandfather',
			f: 'grandmother'
		},
		'-1': {
			m: 'father',
			f: 'mother'
		},
		'0': {
			m: 'me!',
			f: 'me!'
		},
		'1': {
			m: 'son',
			f: 'daughter'
		},
		'2': {
			m: 'grandson',
			f: 'granddaughter'
		},
		'3': {
			m: 'great grandson',
			f: 'great granddaughter'
		}
	}

	return data[x][y]
}

generation(-3, "m") // "great grandfather", "3 generations before you, male...\n"
generation(1, "f") // "daughter", "1 generation after you, female...\n"
generation(-3, "f") // "great grandmother"
generation(-2, "m") // "grandfather"
generation(-2, "f") // "grandmother"
generation(-1, "m") // "father"
generation(-1, "f") // "mother"
generation(0, "f") // "me!"
generation(1, "m") // "son"
generation(1, "f") // "daughter"
generation(2, "m") // "grandson"
generation(2, "f") // "granddaughter"
generation(3, "m") // "great grandson"
generation(3, "f") // "great granddaughter"
generation(0, "m") // "me!"
