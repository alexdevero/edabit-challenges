function greetingMaker(salutation) {
	return function closure(name) {
	  return salutation + ", " + name
	}
}

const greeting = greetingMaker("Hello")

greeting("James") // "Hello, James"
greeting("John") // "Hello, John"
greeting("Jacob") // "Hello, Jacob"
greeting("Joseph") // "Hello, Joseph"
