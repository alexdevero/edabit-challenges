def increment_items(lst):
	return [i+1 for i in lst]

increment_items([0, 1, 2, 3]) # [1, 2, 3, 4]
increment_items([2, 4, 6, 8]) # [3, 5, 7, 9]
increment_items([-1, -2, -3, -4]) # [0, -1, -2, -3]