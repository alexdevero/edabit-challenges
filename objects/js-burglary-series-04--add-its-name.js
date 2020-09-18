function addName(obj, name, value) {
	return Object.assign(obj, { [name]: value })
}

addName({}, "Brutus", 300) // {Brutus: 300}
addName({piano: 500}, "Brutus", 400) // {piano: 500, Brutus: 400}
addName({piano: 500, stereo: 300}, "Caligula", 440) // {piano: 500,  stereo: 300, Caligula: 440}
