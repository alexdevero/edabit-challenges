function relationToLuke(name) {
	const names = {
		'Darth Vader': 'father',
		'Leia': 'sister',
		'Han': 'brother in law',
		'R2D2': 'droid'
	}

	return `Luke, I am your ${names[name]}.`
}
