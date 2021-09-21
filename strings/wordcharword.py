def add(char, txt):
	return txt.replace(" ", char)

add("#", "hello world") # "hello#world"
add("R", "python is fun") # "pythonRisRfun"
add("*", "use .join() for this challenge") # "use*.join()*for*this*challenge"
add("#", " ") # "#"