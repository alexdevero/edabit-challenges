function determineLever(arr) {
	return ['third', 'first', 'second'][arr.indexOf('f')] + ' class lever'
}

Test.assertEquals(determineLever(["e", "f", "l"]), "first class lever")
Test.assertEquals(determineLever(["e", "l", "f"]), "second class lever")
Test.assertEquals(determineLever(["f", "e", "l"]), "third class lever")
