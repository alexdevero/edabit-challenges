function nTablesPlusOne(n) {
	return Array.from(new Array(10), (el, i) => ((i + 1) * n) + 1).join(',')
}

nTablesPlusOne(1) // "2,3,4,5,6,7,8,9,10,11"
nTablesPlusOne(7) // "8,15,22,29,36,43,50,57,64,71"
nTablesPlusOne(134) // "135,269,403,537,671,805,939,1073,1207,1341"
