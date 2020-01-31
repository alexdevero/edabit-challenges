function helloWorld(num) {
	return num % 3 === 0 && num % 5 === 0 ? 'Hello World' : num % 3 === 0 ? 'Hello' : 'World'
}

helloWorld(3) // "Hello"
helloWorld(5) // "World"
helloWorld(15) // "Hello World"
