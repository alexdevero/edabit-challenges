const REGEXP = /\.{3,}/g

const str = "Hello!... Wait. How goes?..... GoodBye!.."

const validate = (REGEXP) => {
	 if(!/\{.*\}/.test(String(REGEXP))) return () => "invalid"
	 return function testReg(str) {
		return str.match(REGEXP);
	 }
}

const testExp = validate(REGEXP)

testExp(str) // "invalid", "You are require to use a quantifier in set your expression."
testExp(str) // ["...", "....."]
