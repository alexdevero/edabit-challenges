let str = `( { one, two } = { one : 1, two : 2}).toString()`

eval(str)

const validString = (str) => {
  return /\{.*(one).*(two).*\}.*\=/.test(str) ? "valid" : "not valid"
}

Test.assertEquals(validString(str), "valid", "You must use the object destructuring to assign variables one and two")
Test.assertEquals(one, 1, "The variable one must equal 1")
Test.assertEquals(two, 2, "The variable two must equal 2")
