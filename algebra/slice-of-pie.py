def equal_slices(total, people, each):
	return people * each <= total

equal_slices(8, 3, 2) # True
equal_slices(8, 3, 3) # False
equal_slices(24, 12, 2) # True
equal_slices(5, 6, 1) # False
equal_slices(5, 0, 100) # True
equal_slices(15, 2, 7) # True
equal_slices(15, 2, 8) # False