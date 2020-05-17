let str = `({ one: anotherOne, two } = { one : 1, two : 2}).toString()`

eval(str)

const validString = (str) => {
  return /\{.*(one).*:.*anotherOne.*(two).*\}.*\=/.test(str) ? "valid" : "not valid"
}

Test.assertEquals(validString(str), "valid", "You must assign the variable anotherOne with object destructuring")
Test.assertEquals(anotherOne, 1, "The variable anotherOne must equal 1")
Test.assertEquals(two, 2, "The variable two must equal 2")
