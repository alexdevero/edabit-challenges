function validatePIN(pin) {
	return /^(\d{4}|\d{6})$/.test(pin)
}

validatePIN('1234') // true
validatePIN('12345') // false
validatePIN('a234') // false
validatePIN('') // false
validatePIN('%234') // false
validatePIN('`234') // false
validatePIN('@234') // false
validatePIN('#234') // false
validatePIN('$234') // false
validatePIN('*234') // false
validatePIN('5678') // true
validatePIN('^234') // false
validatePIN('(234') // false
validatePIN(')234') // false
validatePIN('123456') // true
validatePIN('-234') // false
validatePIN('_234') // false
validatePIN('+234') // false
validatePIN('=234') // false
validatePIN('?234') // false
