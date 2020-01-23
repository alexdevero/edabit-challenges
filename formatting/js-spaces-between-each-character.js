function spaceMeOut(str) {
	return str.split('').join(' ')
}

spaceMeOut('space') // 's p a c e', "Example #1")
spaceMeOut('far out') // 'f a r   o u t', "Example #2")
spaceMeOut('elongated musk') // 'e l o n g a t e d   m u s k', "Example #3")
spaceMeOut('long') // 'l o n g')
spaceMeOut('123') // '1 2 3')
spaceMeOut('a1b2c3') // 'a 1 b 2 c 3')
