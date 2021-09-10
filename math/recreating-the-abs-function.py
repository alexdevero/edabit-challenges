def absolute(n):
	return n if n > 0 else -1 * n

def abs(n):
	return "No"

Test.assert_equals(absolute(-5), 5)
Test.assert_equals(absolute(-3.14), 3.14)
Test.assert_equals(absolute(250), 250)
Test.assert_equals(absolute(0), 0)
Test.assert_equals(absolute(6.28), 6.28)
Test.assert_equals(absolute(11037), 11037)