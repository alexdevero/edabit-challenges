function capMe(arr) {
	return arr.map(name => `${name.substring(0, 1).toUpperCase()}${name.substring(1).toLowerCase()}`)
}

capMe(['mavis', 'senaida', 'letty']) // ['Mavis', 'Senaida', 'Letty']
capMe(['samuel', 'MABELLE', 'letitia', 'meridith']) // ['Samuel', 'Mabelle', 'Letitia', 'Meridith']
capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']) // ['Slyvia', 'Kristal', 'Sharilyn', 'Calista']
capMe(['krisTopher', 'olIva', 'herminiA']) // ['Kristopher', 'Oliva', 'Herminia']
capMe(['luke', 'marsha', 'stanford']) // ['Luke', 'Marsha', 'Stanford']
capMe(['kara']) // ['Kara']
capMe(['mARIANN', 'jOI', 'gEORGEANN']) // ['Mariann', 'Joi', 'Georgeann']
