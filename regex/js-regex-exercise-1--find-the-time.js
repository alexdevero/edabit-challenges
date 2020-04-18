const REGEXP = /\d{1,2}:\d{1,2}/

const str = "Breakfast at 09:00 in the room 123:456.";

const validate = (REGEXP) => {
	 // if(!//.test(String(REGEXP))) return () => "invalid"
	 return function testReg(str) {
		 return str.match(REGEXP)
	 }
}

const testExp = validate(REGEXP)

// testExp(str) // "invalid", "Nothing new here"
testExp(str) // ["09:00"])
