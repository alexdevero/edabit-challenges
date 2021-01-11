function fifth() {
	return arguments.length >= 5 ? typeof arguments[4] : 'Not enough arguments'
}

fifth('a',2,3,4,5) // 'number'
fifth('zero','one','two','three','four','five') // "string"
fifth(1,2,3,4,false) // "boolean"
fifth() // 'Not enough arguments'
fifth(1,2,3,4,5) // 'number'
fifth(1,2,3) // 'Not enough arguments'
