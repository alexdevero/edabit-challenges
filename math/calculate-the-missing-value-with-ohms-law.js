function ohmsLaw(v, r, i) {
	return ([...arguments].every(el => typeof el !== 'string' || [...arguments].filter(el=> typeof el !== 'string').length < 2)) ? 'Invalid' : typeof v === 'string' ? +(r * i).toFixed(2) : typeof r === 'string' ? +(v / i).toFixed(2) : +(v / r).toFixed(2)
}

ohmsLaw(12, 220, '') // 0.05
ohmsLaw(230, '', 2) // 115
ohmsLaw('', 220, 0.02) // 4.4
ohmsLaw('', '', 10) // "Invalid"
ohmsLaw(500, 50, 10) // "Invalid"
ohmsLaw(12, "", "") // "Invalid"
