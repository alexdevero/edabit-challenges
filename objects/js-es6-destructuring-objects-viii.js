const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, ...rest} = user ).toString()`

eval(str)

function validUser() {
	return JSON.stringify(user) === JSON.stringify({ name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}) ? "valid" : "not valid"
}

function rightSideValidation() {
	return /\suser\s/.test(str) ? "valid" : "not valid"
}

Test.assertEquals(validUser(), "valid", "The user object must not be changed")
Test.assertEquals(rightSideValidation(), "valid", 'The right side of the assignment should remain as "user"')
Test.assertEquals(name, "John")
Test.assertEquals(email, "john@example.com")
Test.assertSimilar(rest, {city: "Phoenix", state: "AZ", country: "USA"}, "The variable rest has not been defined yet.")
