function isValid(zip) {
	return zip.length <= 5 ? /^\d+$/.test(zip) : false
}

isValid("59001") // true
isValid("853a7") // false, "No non-digits allowed."
isValid("732 32") // false, "No spaces allowed."
isValid("788876") // false, "No sequences of length greater than 5."
isValid("a923b") // false, "No letters allowed."
isValid("5923!") // false, "No non-digits allowed."
isValid("59238aa") // false, "No letters and no sequences of length greater than 5."
isValid("88231") // true
