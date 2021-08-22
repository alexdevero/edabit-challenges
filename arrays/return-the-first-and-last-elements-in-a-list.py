def first_last(lst):
	return [lst[0], lst[-1]]

first_last([5, 10, 15, 20, 25]) # [5, 25]
first_last(["edabit", 13, None, False, True]) # ["edabit", True]
first_last([None, 4, "6", "hello", None]) # [None, None]
first_last(["hello", "edabit", "dot", "com"]) # ["hello", "com"]
first_last([3, 2, 1]) # [3, 1]
first_last(["one", "two"]) # ["one", "two"]
first_last([False, False, True, False, False, True, False]) # [False, False]