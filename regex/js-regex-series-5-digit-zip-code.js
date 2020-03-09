let x = /^\d{5}$//* Write your regular expression here */

describe("Valid zips", function() {
	Test.expect(validate("81442"), "92345 is a valid zip.")
	Test.expect(validate("81442"), "81442 is a valid zip.")
	Test.expect(validate("33789"), "33789 is a valid zip.")
	Test.expect(validate("42531"), "42531 is a valid zip.")
})

describe("Zips cannot contain other characters.", function() {
	Test.expect(!validate("9a345", "9a345 contains a letter."))
	Test.expect(!validate("%2345"), "%2345 contains a special character.")
})

describe("Zips must have a length of 5.", function() {
	Test.expect(!validate("933345"), "933345 is too long.")
	Test.expect(!validate("2345", "too short"), "2345 is too short.")
})

describe("Zips cannot have whitespaces.", function() {
	Test.expect(!validate(" 93345"), "No leading whitespaces.")
	Test.expect(!validate("23455 "), "No trailing whitespaces.")
	Test.expect(!validate("23 455"), "No middle whitespaces.")
})

function validate(zip) {
	return x.test(zip)
}
