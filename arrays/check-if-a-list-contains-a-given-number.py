def check(lst, el):
	return el in lst

check([1, 2, 3, 4, 5], 3) # True
check([1, 1, 2, 1, 1], 3) # False
check([1, 1, 2, 1, 5, 4, 7], 7) # True
check([1, 1, 2, 1, 5, 4, 7], 8) # False
check([5, 5, 5, 6], 5) # True
check([], 5) # False