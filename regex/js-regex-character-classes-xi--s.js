const REGEXP = /\S\?$/

const str1 = "Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts?"
const str2 = "Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts ?"
const str3 = "Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts  ?"

const validate = (REGEXP) => {
	 if(!/\\S/.test(String(REGEXP))) return () => "invalid"
	 return function testReg(str) {
		 return REGEXP.test(str)
	 }
}

const testExp = validate(REGEXP)

testExp(str3) // "invalid", "You are required to use a \\S character class in your expression."
testExp(str1) // true, "This string is in the correct format."
testExp(str2) // false, "There is a space before the ending punctuation ?"
testExp(str3) // false, "There are spaces before the ending punctuation          ?"
