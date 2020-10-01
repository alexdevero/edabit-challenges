function createID(firstname, lastname) {
	return `${firstname[0].toLowerCase()}${lastname[0].toUpperCase()}${lastname.substring(1, 3).toLowerCase()}`
}

createID("mary","smith") // "mSmi", "all lower case"
createID("S","WORKING") // "sWor", "all upper case"
createID("joHN","wAShington") // "jWas", "mixed case"
