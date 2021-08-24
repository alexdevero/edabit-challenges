def check_equals(lst1, lst2):
	return lst1 == lst2

actual = [check_equals([1, 2], [1, 2]), check_equals([1, 2], [1, 3]), 
  check_equals([11, 2], [1, 12]), check_equals([34, 56, 98], [34, 56, 98]),
  check_equals([1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7], [11, 12, 13, 14, 15, 16, 17]),
  check_equals([11, 12, 15, 16, 19], [11, 13, 15, 1, 6, 19, 20]), 
  check_equals([11, 12, 13, 14, 15, 16], [11, 12, 13, 14, 15, 16]), check_equals([123, 45, 6, 78, 90], [1234, 5678, 90]),
  check_equals([23, 26, 78, 934], [94, 26, 78, 934]), check_equals([], []),
  check_equals([9, 87, 1, 23], [98, 7, 12, 3])]

#results
expected = [True, False, False, True, False, False, True, False, False, True, False]

#messages
message = ["", "", "Are you sure this is true?", "", "Should return false", "", "", "", "", "", ""]

#run tests
for i in actual:
	Test.assert_equals(actual[i], expected[i], message[i])
