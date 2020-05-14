const str = `({ one = 1, two } = { two : 2 }).toString()`

eval(str)

const validString = (str) => {
  return /\{.*(one).*\=.*1.*(two).*\}.*\=/.test(str) ? "valid" : "not valid"
}

Test.assertEquals(validString(str), "valid", "You must give the variable one a default value")
Test.assertEquals(one, 1, "The variable one must equal 1")
Test.assertEquals(two, 2, "The variable two must equal 2")
