const REGEXP = /\D*/g

const str = "242Edabit23 45can344 3be3 254324addictive!"

const validate = (REGEXP) => {
	 if(!/\\D/.test(String(REGEXP))) return () => "required"
	 return function testReg(str) {
		 return str.match(REGEXP).join("")
	 }
}

const testExp = validate(REGEXP)
console.log(testExp(str))

testExp(str) // "required", "You are required to use a \D character class in your expression."
testExp(str) // "Edabit can be addictive!"
