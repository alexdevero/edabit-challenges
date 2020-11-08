function maxNum(n1, n2) {
	if (n1 < n2) {
	  return n2
	} else {
		return n1
  }
}

Test.assertEquals(maxNum(3, 7), 7)
Test.assertEquals(maxNum(-1, 0), 0)
Test.assertEquals(maxNum(1000, 400), 1000)
Test.assertEquals(maxNum(-3, -9), -3)
Test.assertEquals(maxNum(88, 90), 90)
