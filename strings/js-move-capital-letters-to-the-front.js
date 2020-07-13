function capToFront(s) {
	let upper = [...s].filter(char => char.toUpperCase() === char)
	let lower = [...s].filter(char => char.toLowerCase() === char)

	return upper.concat(lower).join('')
}

capToFront("hApPy") // "APhpy"
capToFront("moveMENT") // "MENTmove"
capToFront("aPPlE") // "PPEal"
capToFront("shOrtCAKE") // "OCAKEshrt"
