// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4]
// Use the Rest element
const str = '[head, ...tail] = [1, 2, 3, 4]'

eval(str)

const validString = (str) => {
  return /\.\.\./.test(str) ? "rest" : false
}

const validArray = (str) => {
	return /\[\s*1\s*\,\s*2\s*\,\s*3\s*\,\s*4\s*\]$/.test(str) ? "array" : false
}

Test.assertEquals(validString(str), "rest", "You need to use the Rest element.")
Test.assertEquals(validArray(str), "array", "[1, 2, 3, 4] should remain untouched.")
Test.assertEquals(head, 1, "head should equal to 1")
Test.assertSimilar(tail, [2,3,4], "tail should equal to [2, 3, 4]" )
