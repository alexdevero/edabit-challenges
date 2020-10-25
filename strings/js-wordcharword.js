function add(char, str) {
	return str.replace(/ /g, char)
}

add("#", "hello world") // "hello#world"
add("R", "javascript is fun") // "javascriptRisRfun"
add("*", "use .join() for this challenge") // "use*.join()*for*this*challenge"
add("#", " ") // "#"
