def all_truthy(*args):
	return all(args)

all_truthy(True, True, True) # True
all_truthy(False, True, 1, 2, 3) # False
all_truthy(0, 1, 2, 3, 4, 5) # False
all_truthy(1, 2, 7, 84, 357) # True
all_truthy("Hi", "Hello","This was translated from JS to python") # True
all_truthy([], {}, "") # False