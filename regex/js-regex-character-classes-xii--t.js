const REGEXP = /\t /g

const str = `What
about
me?	 `

const validate = (REGEXP) => {
	 if(!/\\t/.test(String(REGEXP))) return () => "invalid"
	 return function testReg(str) {
		 return str.match(REGEXP).length
	 }
}

const testExp = validate(REGEXP)

Test.assertNotEquals(testExp(str), "invalid", "You are required to use a \\t character class in your expression.")
Test.assertEquals(testExp(str), 1, "There is only one LITERAL white space in this string.")
