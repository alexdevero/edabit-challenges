function relationToLuke(name) {
	const names = {
		'Darth Vader': 'father',
		'Leia': 'sister',
		'Han': 'brother in law',
		'R2D2': 'droid'
	}

	return `Luke, I am your ${names[name]}.`
}

relationToLuke("Darth Vader") // "Luke, I am your father."
relationToLuke("Leia") // "Luke, I am your sister."
relationToLuke("Han") // "Luke, I am your brother in law."
relationToLuke("R2D2") // "Luke, I am your droid."
