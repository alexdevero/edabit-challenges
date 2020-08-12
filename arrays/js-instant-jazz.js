function jazzify(arr) {
	return arr.map(item => item.indexOf('7') === -1 ? item + '7' : item) || []
}

jazzify(['G', 'F', 'C']) // ['G7', 'F7', 'C7']
jazzify(['Dm', 'G', 'E', 'A']) // ['Dm7', 'G7', 'E7', 'A7']
jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']) // ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']
jazzify(['G', 'C7']) // ['G7', 'C7']
jazzify([]) // []
