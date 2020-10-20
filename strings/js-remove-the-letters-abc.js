function removeABC(str) {
	return str.match(/[abc]/gi) ? str.replace(/[abc]/gi, '') : null
}

removeABC("This might be a bit hard") // "This might e  it hrd"
removeABC("This is awesome") // "This is wesome"
removeABC("hello world!") // null
removeABC("coding is fun!") // "oding is fun!"
removeABC("") // null
