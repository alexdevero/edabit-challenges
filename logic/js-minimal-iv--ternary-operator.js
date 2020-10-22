function areTrue(a, b) {
	return (a == true) ? (b == true) ? "both" : "first" : (b == true) ? "second" : "neither"
}

Test.assertEquals(areTrue(true, true), "both")
Test.assertEquals(areTrue(true, false), "first")
Test.assertEquals(areTrue(false, true), "second")
Test.assertEquals(areTrue(false, false), "neither")
