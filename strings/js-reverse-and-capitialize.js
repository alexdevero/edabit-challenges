function reverseCapitalize(str) {
	return str.split('').reverse().join('').toUpperCase()
}

reverseCapitalize('edabit') // 'TIBADE'
reverseCapitalize('abc') // 'CBA'
reverseCapitalize('hellothere') // 'EREHTOLLEH'
reverseCapitalize('input') // 'TUPNI'
reverseCapitalize('indubitably') // 'YLBATIBUDNI'
