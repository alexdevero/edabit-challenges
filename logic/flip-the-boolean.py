def flip_bool(b):
	return not b

Test.assert_equals(flip_bool(1), 0)
Test.assert_equals(flip_bool(True), 0)
Test.assert_equals(flip_bool(0), 1)
Test.assert_equals(flip_bool(False), 1)