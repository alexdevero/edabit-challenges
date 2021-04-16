const str = `({ first = "John", last = "Doe", alias: nickname = "JD" } = { first: "James", last: "Baker" }).toString()`

eval(str)

const validString = (str) => {
  return /\{.*alias.*\:.*nickname.*\=.*\"JD\".*\}/.test(str) ? "valid" : "not valid"
}

Test.assertEquals(validString(str), "valid", "You must rename alias to nickname and give it a default value of JD")
Test.assertEquals(first, "James", "The variable first does not equal James")
Test.assertEquals(last, "Baker", "The variable last does not equal Baker")
Test.assertEquals(nickname, "JD", "The variable nickname does not equal JD")
