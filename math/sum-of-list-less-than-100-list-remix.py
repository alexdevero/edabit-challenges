def list_less_than_100(lst):
	return sum(lst) < 100

list_less_than_100([5, 57]) # True
list_less_than_100([77, 30]) # False
list_less_than_100([0, 59,15]) # True
list_less_than_100([0]) # True
list_less_than_100([35, 59,15]) # False
list_less_than_100([25, 50, 25]) # False