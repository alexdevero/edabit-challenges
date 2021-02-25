function twoMethods() {
	// find and equals are not regular expression methods.  Replace them.
	let methodOne = /hello/.exec('hello')[0] === 'hello'
	let methodTwo = /hello/.test('hello') // returns a boolean
	return methodOne && methodTwo
}

twoMethods() // true
