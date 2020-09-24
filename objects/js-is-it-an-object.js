function isObject(value) {
	return typeof value === 'object' && value !== null
}

Test.assertEquals(isObject(new Date()), true)
Test.assertEquals(isObject("12/12/2011"), false)
Test.assertEquals(isObject(null), false)
Test.assertEquals(isObject([1,2,3]), true)
Test.assertEquals(isObject({}), true)
