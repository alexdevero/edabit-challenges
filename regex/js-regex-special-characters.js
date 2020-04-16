function asterisk(string) {
	return /(a)+\w*(c)+/g.test(string)
}

asterisk("abccount") // true
asterisk("abbbcount") // true
asterisk("account") // true
asterisk("bbbccount") // false
asterisk("ccount") // false
asterisk("abbount") // false
