function asciiCapitalize(str) {
	return str.split('').map((char, i) => str.charCodeAt(i) % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
}

asciiCapitalize("Oh what a beautiful morning.") // "oH wHaT a BeauTiFuL moRNiNg."
asciiCapitalize("THE LITTLE MERMAID") // "THe LiTTLe meRmaiD"
asciiCapitalize("to be or not to be!") // "To Be oR NoT To Be!"
